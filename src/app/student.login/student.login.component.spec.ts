import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student.LoginComponent } from './student.login.component';

describe('Student.LoginComponent', () => {
  let component: Student.LoginComponent;
  let fixture: ComponentFixture<Student.LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student.LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student.LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
