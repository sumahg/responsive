import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student.login',
  templateUrl: './student.login.component.html',
  styleUrls: ['./student.login.component.css']
})
export class StudentLoginComponent implements OnInit {
 student:any = {
   userName:'',
   password:''
 }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verifyStudent(){
    console.log(this.student.userName);
    console.log(this.student.password);
    if(this.student.userName == this.student.password){
      this.router.navigate(['/student']);
    }else{
      alert('username and password should be same')
    }
  }

}
