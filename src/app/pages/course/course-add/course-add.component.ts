import * as SectionActions from '../../section/store/section.actions';
import * as _ from 'lodash';
import * as fromSection from '../store/course.states';
import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AddCourseAction } from '../store/course.actions';
import { Course } from '../../../shared/model/Course';
import { CourseService } from '../../../shared/services/course/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
              private store:Store<fromSection.CourseFeatureState>,
              private snackBar:MatSnackBar,
              private router:Router) { }

  
  studentsBySection;
  studentsBySection$;
  sectionSubscription:Subscription;
  isSubmitted=false;
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
    //this.studentsBySection$=this.studentService.getStudentsBySection();
    //this.sectionSubscription = 
      // this.studentService.getStudentsBySection()
      this.store.dispatch(new SectionActions.GetAllSections());
      this.store.select('section').skip(1)
          .subscribe((sectionState)=>{
            console.log(sectionState);
            this.studentsBySection=sectionState.sections;
            this.studentsBySection.forEach(section => {
              console.log(section);
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
    //console.log(this.addCourseForm.get('courseStartDate').value!=='')
    if(this.addCourseForm.get('courseStartDate').value!==''){
      this.addCourseForm.value.courseStartDate=moment(this.addCourseForm.get('courseStartDate').value).format('YYYY/MM/DD');
    }
    if(this.addCourseForm.get('courseEndDate').value!==''){
      this.addCourseForm.value.courseEndDate=moment(this.addCourseForm.get('courseEndDate').value).format('YYYY/MM/DD');
    }
      
    if(this.addCourseForm.get('trainHours').value==='')
      this.addCourseForm.value.trainHours=0;
      
    //console.log(this.addCourseForm.value);
  
    //  this.courseService.addCourse(this.addCourseForm.value)
    //                   .subscribe((res:Course)=>{
    //                     //console.log(res);
    //                     // this.snackBar.open(`新增"${res.courseName}"訓練課程`, '關閉',{
    //                     //   duration:2000
    //                     // });
    //                     this.isSubmitted=true;
    //                     setTimeout(()=>{
    //                       this.router.navigate(['/course']);
    //                     },1000);
                        
    //                   });

    this.store.dispatch(new AddCourseAction(this.addCourseForm.value));

  }
}
