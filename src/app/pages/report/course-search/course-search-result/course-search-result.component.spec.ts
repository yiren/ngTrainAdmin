import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchResultComponent } from './course-search-result.component';

describe('CourseSearchResultComponent', () => {
  let component: CourseSearchResultComponent;
  let fixture: ComponentFixture<CourseSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
