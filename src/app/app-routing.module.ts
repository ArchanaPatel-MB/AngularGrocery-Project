import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';

const routes: Routes = [
  {
  path:"",
  component: AddComponent,
  },
  {
    path:"edit/:id",
    component: EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AddComponent,EditComponent]
