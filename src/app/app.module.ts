import { AddComponent } from './user/add/add.component';
import { RouterModule } from '@angular/router'; 
import { EditComponent } from './user/edit/edit.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FormComponent } from './form/form.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   FormComponent,
   RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
