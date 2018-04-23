import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CourseFeatureState } from '../store/course.states';
import { CourseService } from '../../../shared/services/course/course.service';
import { GetCourseByIdAction } from '../store/course.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  courseDataState$;

  constructor(private courseService:CourseService,
              private store:Store<CourseFeatureState>,
              private route:ActivatedRoute,
              private router:Router) { }
              
  ngOnInit() {
    const courseId=this.route.snapshot.params['courseId']
    this.store.dispatch(new GetCourseByIdAction(courseId));
    this.courseDataState$=this.store.select('courseDataState');
    // this.courseService.getCourseDetailById();
    
  }

  

}
