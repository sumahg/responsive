import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit.StudentComponent } from './edit.student.component';

describe('Edit.StudentComponent', () => {
  let component: Edit.StudentComponent;
  let fixture: ComponentFixture<Edit.StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit.StudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit.StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
