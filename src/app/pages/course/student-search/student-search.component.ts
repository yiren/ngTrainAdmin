import { Component, OnDestroy, OnInit } from '@angular/core';

import { CourseService } from '../../../shared/services/course/course.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit, OnDestroy {
  

  constructor(private courseService:CourseService) { }

  studentSearch$;
  ngOnInit() {
    this.studentSearch$=this.courseService.courseSearchSubject;
  }

  ngOnDestroy() {
   this.courseService.courseSearchSubject.next([]);
  }

}
