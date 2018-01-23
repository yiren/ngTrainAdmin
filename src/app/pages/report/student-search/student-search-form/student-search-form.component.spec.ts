import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchFormComponent } from './student-search-form.component';

describe('StudentSearchFormComponent', () => {
  let component: StudentSearchFormComponent;
  let fixture: ComponentFixture<StudentSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
