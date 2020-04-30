import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '@core/services/todo-list.service';
import { ToDoList } from '@shared/models/todoList';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  newToDoForm: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private todoListService: TodoListService,
    ) { 
    this.submitted = false;
  }

  ngOnInit() {
    this.newToDoForm = this.formBuilder.group({
      toDoItem: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.newToDoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newToDoForm.invalid) {
        return;
    }

    if (this.f.toDoItem.value === null || this.f.toDoItem.value === '') {
      return;
    }

    this.todoListService.add(this.f.toDoItem.value);
    this.f.toDoItem.reset();
  }

}
