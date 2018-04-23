import * as _ from 'lodash';
import * as moment from 'moment';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DeleteCourseAction, UpdateCourseByIdAction } from '../store/course.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Course } from '../../../shared/model/Course';
import { CourseFeatureState } from '../store/course.states';
import { CourseService } from '../../../shared/services/course/course.service';
import { FormBuilder } from '@angular/forms';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Store } from '@ngrx/store';
import { StudentService } from 'app/shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit, OnDestroy {

  editCourseForm:FormGroup;
  studentsFormGroup:FormGroup;
  //course;
  studentsBySection;
  startDate;
  endDate;
  sectionSubscription:Subscription;
  courseSubscription:Subscription;
  subscriptions:Subscription[]=[];
  updateStudentsBySection;
  courseId;
  constructor(private fb:FormBuilder,
              private courseService:CourseService,
              private studentService:StudentService,
              private store: Store<CourseFeatureState>,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.courseId=this.route.snapshot.params['courseId'];
    this.studentsFormGroup = this.fb.group({});
    this.editCourseForm = this.fb.group({
      'courseName':['', Validators.required],
      'courseStartDate':{value:new Date(), disabled:true},
      'courseEndDate':{value:new Date(), disabled:true},
      'trainHours':'',
      'students':this.studentsFormGroup
    });
    this.sectionSubscription = 
      this.studentService.getStudentsBySection()
          .subscribe((sections:any[])=>{
          
          this.studentsBySection=sections;
          this.updateStudentsBySection=_.cloneDeep(sections);
          this.updateStudentsBySection.forEach(element => {
            element.students=[];
          });
          this.studentsBySection.forEach(section => {
            //console.log(section);
            this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
          });
          this.courseSubscription=
            this.courseService.getCourseDetailById(this.courseId)
            .subscribe((course:Course)=>{
              _.each(this.updateStudentsBySection, (item)=>{
                      //console.log(item);
                      _.each(course.studentCourses,(st)=>{
                        if(item.sectionCode==st.sectionCode){
                          //console.log(st);
                          item.students.push(st.studentId);
                        }
                    }
                  );
                }
              );
              _.each(this.updateStudentsBySection, (sbs)=>{
                this.studentsFormGroup.controls[sbs.sectionCode].setValue(sbs.students);
              });
              //console.log(this.updateStudentsBySection);
              //console.log(this.studentsFormGroup.controls);
              this.editCourseForm.patchValue({
                'courseName':course.courseName,
                'courseStartDate':new Date(course.courseStartDate),
                'courseEndDate':course.courseEndDate?new Date(course.courseEndDate):null,
                'trainHours':course.trainHours,
                // 'students':this.studentsFormGroup
              })
          });
        //console.log(this.updateStudentsBySection);
        this.subscriptions.push(this.courseSubscription);
    });
    this.subscriptions.push(this.sectionSubscription);
    
    
    let testData=[
      {
        sectionCode:'A',
        studentId:4
      },
      {
        sectionCode:'E',
        studentId:2
      },
      {
        sectionCode:'A',
        studentId:5
      },
      {
        sectionCode:'E',
        studentId:3
      },
      {
        sectionCode:'A',
        studentId:6
      }
    ];

    let sectionWithStudents=[
      {
        sectionCode:'A',
        students:[]
      },
      {
        sectionCode:'E',
        students:[]
      }
    ];
    
    // _.each(testData, (item)=>{
    //   _.each(sectionWithStudents, (student)=>{
    //     if(item.sectionCode==student.sectionCode){
    //       student.students.push(item.studentId);
    //     }
    //   })
    // })

    // console.log(sectionWithStudents);

    
    //this.studentsBySection=this.studentService.getStudentsBySection();

    // const testData2=_.cloneDeep(this.studentsBySection);
    // console.log("Before", testData2);
    // _.each(testData2, (item)=>{
    //   item.students=[1,2,3];
    // });

    // console.log("After",testData2);
    // this.studentsFormGroup = this.fb.group({});
    // this.studentsBySection.forEach(section => {
    //   this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
    // });
    //console.log(this.studentsFormGroup.controls);
    // console.log(this.course.students);
    // this.course.students.forEach(section => {
    //   //console.log(section.sectionCode);
    //   this.studentsFormGroup.controls[section.sectionCode].setValue(section.students);
    // });
    //this.studentsFormGroup.controls['A'].setValue([80,2,97]);
    //console.log(this.studentsFormGroup.controls['J'].setValue(this.course.));
    
    //this.startDate=new Date(this.course.courseStartDate);
    //this.endDate=this.course.courseEndDate;
    //console.log(this.editCourseForm);

    this.onStartDateChange();
  }
  onStartDateChange(){
    // this.editCourseForm.get('courseStartDate').valueChanges
    //     .subscribe(date=>{
    //       console.log(date);
    //       console.log(moment(date).format("YYYY/MM/DD"));
    //     });
  }
  isSubmitted=false;
  s=[];


  onSubmit(){
    
    let studentIds=this.editCourseForm.value.students;
    _.each(_.values(studentIds),
      item=>{
        //console.log(item);
        _.each(item, v=>this.s.push(v));
    });
    //console.log(this.s);
    this.editCourseForm.value.students=this.s;
    if(this.editCourseForm.get('courseStartDate').value){
      this.editCourseForm.value.courseStartDate=moment(this.editCourseForm.get('courseStartDate').value).format('YYYY/MM/DD');
    }
    if(this.editCourseForm.get('courseEndDate').value){
      this.editCourseForm.value.courseEndDate=moment(this.editCourseForm.get('courseEndDate').value).format('YYYY/MM/DD');
    }
    console.log(this.editCourseForm.value);
    // this.subscriptions.push(this.courseService.updateCourse(this.courseId, this.editCourseForm.value)
    //                   .subscribe(res=>{
    //                     console.log(res);
    //                     this.isSubmitted=true;
    //                     setTimeout(()=>this.router.navigate(['/course']),1000);
                        
                        
    //                   }));
    this.store.dispatch(new UpdateCourseByIdAction({courseId:this.courseId,course:this.editCourseForm.value}));
  }

  deleteCourse(){
    // this.subscriptions.push(this.courseService.deleteCourse(this.courseId)
    //                 .subscribe(res=>{
    //                   //console.log(res);
    //                   this.isSubmitted=true;
    //                     setTimeout(()=>{
    //                       this.router.navigate(['/course']);
    //                     },1000);
    //                 }));
    this.store.dispatch(new DeleteCourseAction(this.courseId));
  }

  ngOnDestroy(){
    this.subscriptions.forEach(item=>item.unsubscribe());
  }
}
