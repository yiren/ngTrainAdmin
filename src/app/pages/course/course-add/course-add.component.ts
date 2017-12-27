import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Course } from '../../../shared/model/Course';
import { CourseService } from '../../../shared/services/course/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { StudentService } from 'app/shared/services/student/student.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  addCourseForm:FormGroup;
  studentsFormGroup:FormGroup;

  constructor(private fb:FormBuilder,
              private courseService:CourseService,
              private studentService:StudentService,
              private snackBar:MatSnackBar,
              private router:Router) { }

  
  studentsBySection;
  isSubmitted=false;
  typical={
    courseName:'中國電機工程學會「106年度會員大會」',
    CourseStartDate:'',
    CourseEndDate:'',
    TrainHours:30
  }
  checked;
  ngOnInit() {
    this.studentsBySection = this.studentService.getStudentsBySection();
    this.studentsFormGroup = this.fb.group({});
    this.studentsBySection.forEach(section => {
      this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
    });
    this.addCourseForm = this.fb.group({
      'courseName':['', Validators.required],
      'courseStartDate':{value:'',disabled:true},
      'courseEndDate':{value:'',disabled:true},
      'trainHours':'',
      'students':this.studentsFormGroup
    });
  }
  testData;
  s=[];
  onSubmit(){
    this.testData=_.values(this.addCourseForm.value.students);
    _.each(this.testData, (v1, k1)=>{
      _.each(v1, (v2, k2)=>{
        this.s.push(v2);
      })
    });
    this.addCourseForm.value.students= this.s;
    console.log(this.addCourseForm.value);
    
    this.courseService.addCourse(this.addCourseForm.value)
                      .subscribe((res:Course)=>{
                        console.log(res);
                        // this.snackBar.open(`新增"${res.courseName}"訓練課程`, '關閉',{
                        //   duration:2000
                        // });
                        this.isSubmitted=true;
                        setTimeout(()=>{
                          this.router.navigate(['/course']);
                        },2000);
                        
                      });
    
    
  }
}
