import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToAddpage(){
    this.router.navigate(['/Add-student']);
  }
  navigateToListpage(){
    this.router.navigate(['/list-student']);
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
