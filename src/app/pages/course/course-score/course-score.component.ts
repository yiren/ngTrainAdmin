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

  ngOnInit() {
    this.students=this.courseService.getStudentScoreById(1);

    this.scoreStudents=this.fb.group({});

    this.students.forEach(student => {
       this.scoreStudents.addControl(student.studentId, new FormControl(student.score));
    });

    this.scoreForm=this.fb.group({
      'courseId':[1, Validators.required],
      'scoreStudents':this.scoreStudents
    });
  }

  updateScore(){

    console.log(this.scoreForm.value);
  }

}
