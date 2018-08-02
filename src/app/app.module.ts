import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
