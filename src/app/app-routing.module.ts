import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [
{ path: 'home', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
