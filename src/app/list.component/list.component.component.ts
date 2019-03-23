import { Component, OnInit } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.component',
  templateUrl: './list.component.component.html',
  styleUrls: ['./list.component.component.css']
})
export class ListComponentComponent implements OnInit {
  teacher = '';
  students = this.studentService.getStudents();
  constructor(private studentService: StudentService, private router:Router) { }

  ngOnInit() {}

  listAll(){
    this.students = this.studentService.getStudents();
  }
  
  search(teacher){
    this.students = this.studentService.getStudents();
    var result = this.students;
    this.students = result.filter(function(student) {
      return student.teacher.toLowerCase() == teacher.toLowerCase();
    });
   // return this.students;
  }

  deleteStudent(student){
    this.studentService.deleteStudent(student);
  }
  editStudent(student){
    console.log("rollno" + student.rollno);
    this.router.navigate(['/edit-student/'+student.rollno]); 
  }

  navigateToStudent(){
    this.router.navigate(['/student']);
  }
  deleteAll(){
    localStorage.clear();
    this.students = [];
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
