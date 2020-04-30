import { Component, OnInit } from '@angular/core';
import { TodoListService } from '@core/services/todo-list.service';
import { ToDoList } from '@shared/models/todoList';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  toDoList: ToDoList[];
  temporaryTask: ToDoList;
  isUndo: boolean;

  constructor(
    private todoListService: TodoListService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.temporaryTask = {} as ToDoList;
    this.isUndo = false;
    this.todoListService.currentToDoList.subscribe(
      list => {
        this.toDoList = list;
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.toDoList, event.previousIndex, event.currentIndex);
  }

  isCompleted() {
    this.todoListService.save(this.toDoList);
  }


  deleteTask(id: number, toDoId: number) {
    this.temporaryTask = this.toDoList[id];
    let isDeleted = this.todoListService.delete(toDoId);
    if(isDeleted) {
      this.isUndo = false;
      this.openSnackBar(id, 'task deleted', 'undo');
    }
    console.log(this.toDoList);
  }


  openSnackBar(id: number, message: string, action: string) {
    let snack = this._snackBar.open(message, action, {
      duration: 3000,
    });

    snack.onAction().subscribe(() => {
      if (this.isUndo === false) {
        this.todoListService.undo(id, this.temporaryTask);
        this.isUndo = true;
      }
    });
  }

}
