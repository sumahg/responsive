import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { StudentLoginComponent } from './student.login/student.login.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'student-login', component: StudentLoginComponent},
  {path:'student', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
