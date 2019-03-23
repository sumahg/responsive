import { Component, OnInit } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.component',
  templateUrl: './add.component.component.html',
  styleUrls: ['./add.component.component.css']
})
export class AddComponentComponent implements OnInit {

  constructor(private studentService:StudentService, private router: Router) { }
  student = {rollno: 0, dob : '', firstName: '',lastName:'', parentName: '', parentPhone: '',teacher:'', address:''}

  ngOnInit() {
  }

  addStudent(student){
    this.studentService.addStudent(student);
    this.router.navigate(['/list-student']);
 }
 navigateToStudent(){
  this.router.navigate(['/student']);
}
}
