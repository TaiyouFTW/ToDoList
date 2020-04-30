import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus as faPlus, faCheck as faCheck, faTrash as faTrash, faBars as faBars } from '@fortawesome/free-solid-svg-icons'; // Solid

// Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Pretty checkbox
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';

// Components
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    NewTodoComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    FontAwesomeModule,
    DragDropModule,
    NgxPrettyCheckboxModule
  ],
})
export class TodoModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faCheck, faTrash, faBars);
  }
}
