import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewItemComponent } from './new-item/new-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ApiService } from './_services/api.service';
import { AuthService } from './_services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewItemComponent,
    LoginComponent,
    RegisterComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
