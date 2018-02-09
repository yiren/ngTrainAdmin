import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

import { CourseService } from 'app/shared/services/course/course.service';

@Component({
  selector: 'app-course-score',
  templateUrl: './course-score.component.html',
  styleUrls: ['./course-score.component.scss']
})
export class CourseScoreComponent implements OnInit {
  students;
  constructor(private courseService:CourseService,
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
      'modifier':[''],
      'studentScoreData':this.scoreStudents
    });
    
    this.courseId=this.route.snapshot.params['courseId'];

    this.courseService.getCourseDetailById(this.courseId)
        .subscribe(course=>{
          console.log(course);
          this.course=course;
          course.studentCourses.forEach(student => {
            this.scoreStudents.addControl(student.studentId, new FormControl(student.score, Validators.required));
         });
        });
  }

  updateScore(){
    
    console.log(this.scoreForm.value);
    this.courseService.updateStudentScoreById(this.courseId, this.scoreForm.value)
        .subscribe(res=>{
          //console.log(res);
          this.isSubmitted=true;
          setTimeout(()=>{
            this.router.navigate(['/course']);
          },1000);
        })
  }     

}
