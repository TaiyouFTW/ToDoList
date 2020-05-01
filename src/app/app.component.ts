import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-loading></app-loading>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'ToDoList';
}
