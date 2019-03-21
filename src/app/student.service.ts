import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
 students = []
  constructor() { }

  setLocalStorageStudents(list){
    localStorage.setItem('students', JSON.stringify(list));
  }

  getStudents() {
    if(this.students.length == 0){
      this.students = [
 {rollno: 1,dob : '03/16/2019', firstName:'Suma',lastName:'madhu', parentName: 'Govindaraju', parentPhone: '99999', address:'Bangalore'},
 {rollno: 2,dob :'03/16/2019',firstName: 'Yuktha',lastName:'madhu',  parentName: 'Madhu', parentPhone: '99999', address:'Bangalore'}
     ];
     this.setLocalStorageStudents(this.students);
    }else{
     this.students = JSON.parse(localStorage.getItem('students'));
    }
    return this.students;
  }

  getStudentByRollno(rollno){
   for(var i = 0; i < this.students.length; i++){
     if(rollno == this.students[i].rollno){
       return this.students[i];
     }
   }
   return null;
  }

  updateStudent(student){
    for (var i = 0; i < this.students.length; i++){
        if(student.rollno == this.students[i].rollno){
           this.students[i] = student;
        }
        this.setLocalStorageStudents(this.students);
    }
  }

  addStudent(student){
    if(student.rollno == 0){
     student.rollno = Math.round(Math.random()*100);
    }
     this.students.push(student);
     this.setLocalStorageStudents(this.students);
  }

  deleteStudent(student){
    for(var i =0; i < this.students.length; i++){
      if(student.rollno == this.students[i].rollno){
         this.students.splice(i,1);
         this.setLocalStorageStudents(this.students);
      }
    }
  }
}

