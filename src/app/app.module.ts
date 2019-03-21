import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './student.login/student.login.component';
import { StudentComponent } from './student/student.component';
import { AddComponentComponent } from './add.component/add.component.component';
import { ListComponentComponent } from './list.component/list.component.component';
import { EditStudentComponent } from './edit.student/edit.student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentLoginComponent,
    StudentComponent,
    AddComponentComponent,
    ListComponentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
