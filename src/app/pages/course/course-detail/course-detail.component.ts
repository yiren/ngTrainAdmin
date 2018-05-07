import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseFeatureState, selectCourseById } from '../store/course.states';

import { CourseService } from '../../../shared/services/course/course.service';
import { GetCourseByIdAction } from '../store/course.actions';
import { Store } from '@ngrx/store';
import { getRouter } from '../../../store/app.states';

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
    // const courseId=this.route.snapshot.params['courseId']
    // this.store.dispatch(new GetCourseByIdAction(courseId));
    this.courseDataState$=this.store.select(getRouter)
              .map(routeParams=>routeParams.state.params)
              .take(1)
              .do(console.log)
              //.do(params=>this.store.dispatch(new GetCourseByIdAction(params['courseId'])))
              .switchMap(params=>{
                this.store.dispatch(new GetCourseByIdAction(params['courseId']));
                return this.store.select(selectCourseById)
              })
              .share()
              //.map()
    //this.courseDataState$=this.store.select(selectCourseById);
    // this.courseService.getCourseDetailById();
    
  }

  

}
