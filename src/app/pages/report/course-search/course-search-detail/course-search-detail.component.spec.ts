import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchDetailComponent } from './course-search-detail.component';

describe('CourseSearchDetailComponent', () => {
  let component: CourseSearchDetailComponent;
  let fixture: ComponentFixture<CourseSearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSearchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
