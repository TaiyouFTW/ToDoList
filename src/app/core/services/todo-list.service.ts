import { Injectable } from '@angular/core';
import { ToDoList } from '@shared/models/todoList';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _currentToDoListSubject: BehaviorSubject<ToDoList[]>;
  public currentToDoList: Observable<ToDoList[]>;

  constructor() {
    this._currentToDoListSubject = new BehaviorSubject<ToDoList[]>(JSON.parse(localStorage.getItem('CurrentToDoList')));
    this.currentToDoList = this._currentToDoListSubject.asObservable();
  }

  public get currentToDoListValue(): ToDoList[] {
    return this._currentToDoListSubject.value;
  }

  getList() {
    return this.currentToDoListValue;
  }

  save(list: ToDoList[]) {
    localStorage.removeItem('CurrentToDoList');
    localStorage.setItem('CurrentToDoList', JSON.stringify(list));
    this._currentToDoListSubject.next(list);
  }

  add(text: string) {
    let item: ToDoList = {} as ToDoList;
    let list = this.getList();


    list = list === null ? Array<ToDoList>() : list;

    let high = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id > high) {
        high = list[i].id;
      }
    }

    item.id = list === null ? 0 : list.length > 0 ? high + 1 : 0;
    item.completed = false;
    item.text = text;

    list.push(item);

    this.save(list);
  }

  delete(id: number) {
    let list = this.getList();

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list.splice(i, 1);
      }
    }

    this.save(list);

    return true;
  }

  undo(id: number, task: ToDoList) {
    let list = this.getList();
    list.splice(id, 0, task);

    this.save(list);
  }
}
