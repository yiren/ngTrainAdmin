import * as _ from 'lodash';
import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Course } from '../../../shared/model/Course';
import { CourseService } from '../../../shared/services/course/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { StudentService } from 'app/shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';

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
  studentsBySection$;
  sectionSubscription:Subscription;
  isSubmitted=false;
  typical={
    courseName:'中國電機工程學會「106年度會員大會」',
    CourseStartDate:'',
    CourseEndDate:'',
    TrainHours:30
  }
  checked;
  ngOnInit() {
    this.studentsFormGroup = this.fb.group({});
    this.addCourseForm = this.fb.group({
      'courseName':['', Validators.required],
      'courseStartDate':{value:'',disabled:true},
      'courseEndDate':{value:'',disabled:true},
      'trainHours':'',
      'students':this.studentsFormGroup
    });
    this.studentsBySection$=this.studentService.getStudentsBySection();
    this.sectionSubscription = 
      this.studentService.getStudentsBySection()
          .subscribe((sections:any[])=>{
            this.studentsBySection=sections;
            console.log(sections);
            this.studentsBySection.forEach(section => {
              //console.log(section);
              this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
          });
    });
    
    this.onStartDateChange();
    //console.log(this.addCourseForm.controls)
  }

  onStartDateChange(){
    // this.addCourseForm.get('courseStartDate').valueChanges
    //     .subscribe(date=>{
    //       console.log(date);
    //       console.log(moment(date).format("YYYY/MM/DD"));
    //     });
  }

  testData;
  s=[];
  onSubmit(){
    console.log(this.addCourseForm.value);
    this.testData=_.values(this.addCourseForm.value.students);
    _.each(this.testData, (v1, k1)=>{
      _.each(v1, (v2, k2)=>{
        this.s.push(v2);
      })
    });
    this.addCourseForm.value.students = this.s;
    this.addCourseForm.value.courseStartDate=moment(this.addCourseForm.get('courseStartDate').value).format('YYYY/MM/DD');
    this.addCourseForm.value.courseEndDate=moment(this.addCourseForm.get('courseEndDate').value).format('YYYY/MM/DD');
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
