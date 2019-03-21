import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.ComponentComponent } from './add.component.component';

describe('Add.ComponentComponent', () => {
  let component: Add.ComponentComponent;
  let fixture: ComponentFixture<Add.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
