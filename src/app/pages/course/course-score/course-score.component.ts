import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { GetCourseByIdAction, UpdateScoreByIdAction } from '../store/course.actions';

import { CourseFeatureState } from '../store/course.states';
import { CourseService } from 'app/shared/services/course/course.service';
import { Store } from '@ngrx/store';
import {skip} from 'rxjs/operators/skip';

@Component({
  selector: 'app-course-score',
  templateUrl: './course-score.component.html',
  styleUrls: ['./course-score.component.scss']
})
export class CourseScoreComponent implements OnInit {
  students;
  constructor(private courseService:CourseService,
              private store:Store<CourseFeatureState>,
              private route:ActivatedRoute,
              private router:Router,
              private fb:FormBuilder) { }

  scoreForm:FormGroup;
  scoreStudents:FormGroup;
  courseId;
  course;
  isSubmitted=false;
  ngOnInit() {
    this.scoreStudents=this.fb.group({});
    this.scoreForm=this.fb.group({
      'studentScoreData':this.scoreStudents
    });
    
    this.courseId=this.route.snapshot.params['courseId'];
    this.store.dispatch(new GetCourseByIdAction(this.courseId));
    // this.courseService.getCourseDetailById(this.courseId)
    this.store.select('courseDataState')
        .skip(1)
        .subscribe(courseState=>{ 
          this.course=courseState.course;
          this.course.studentCourses.forEach(student => {
            this.scoreStudents.addControl(student.studentId, new FormControl(student.score, Validators.required));
         });
        });
  }

  updateScore(){
    console.log(this.scoreForm.value);
    this.store.dispatch(new UpdateScoreByIdAction({courseId:this.courseId,scores:this.scoreForm.value}));
    // this.courseService.updateStudentScoreById(this.courseId, this.scoreForm.value)
    //     .subscribe(res=>{
    //       //console.log(res);
    //       this.isSubmitted=true;
    //       setTimeout(()=>{
    //         this.router.navigate(['/course']);
    //       },1000);
    //     })
  }     

}
