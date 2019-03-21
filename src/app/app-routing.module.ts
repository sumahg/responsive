import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { StudentLoginComponent } from './student.login/student.login.component';
import { StudentComponent } from './student/student.component';
import { AddComponentComponent } from './add.component/add.component.component';
import { ListComponentComponent } from './list.component/list.component.component';
import { EditStudentComponent } from './edit.student/edit.student.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'student-login', component: StudentLoginComponent},
  {path:'student', component: StudentComponent },
  {path: 'Add-student', component: AddComponentComponent},
  {path: 'list-student', component: ListComponentComponent},
  {path: 'edit-student/:rollno', component:EditStudentComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
