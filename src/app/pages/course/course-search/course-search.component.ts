import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../../shared/services/course/course.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  courseSearch$;

  ngOnInit() {
    this.courseSearch$=this.courseService.courseSearchSubject;

  }

}
