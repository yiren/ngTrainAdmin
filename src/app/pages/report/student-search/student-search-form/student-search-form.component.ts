import * as moment from 'moment';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CourseService } from '../../../../shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { ReportService } from '../../../../shared/services/report/report.service';
import { StudentService } from 'app/shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operator/map';
import { startWith } from 'rxjs/operator/startWith';

@Component({
  selector: 'app-student-search-form',
  templateUrl: './student-search-form.component.html',
  styleUrls: ['./student-search-form.component.scss']
})
export class StudentSearchFormComponent implements OnInit, OnDestroy {
  

  constructor(private courseService:CourseService,
              private reportService:ReportService,
              private studentService:StudentService,
              private fb:FormBuilder) { }

  studentSearchForm:FormGroup;
  students:any[];
  @Input()
  data:Observable<any[]>;
  
  isSubmitted=false;
  searchDataSubscription:Subscription;
  searchData;
  filteredStudents:Observable<any[]>;
  ngOnInit() {
    
    this.studentSearchForm=this.fb.group({
      'studentName':['', Validators.required],
      'courseStartDate':{value:'', disabled:true},
      'courseEndDate':{value:'', disabled:true}
    });
    this.studentService.getStudents()
        .subscribe(students=>{
          this.students=students;
          this.filteredStudents=this.studentSearchForm.get('studentName').valueChanges
                              .startWith('')
                              .map(studentName=>studentName ? this.filterStudents(studentName):this.students.slice());
        });
    this.courseService.lastStudentSearchValueSubject.subscribe(studentVM=>{
       this.studentSearchForm.patchValue({
        'studentName':studentVM.studentName,
        'courseStartDate':new Date(studentVM.courseStartDate),
        'courseEndDate':new Date(studentVM.courseEndDate)
       });
    });
    this.searchDataSubscription=this.data.subscribe(res=>{
      this.searchData=res;
      //console.log(this.searchData);
    });
  }
  isValid=false;

  filterStudents(name:string){
    return this.students.filter(student=>student.studentName.indexOf(name)===0)
  }
  
  onSubmit(){
    this.courseService.courseSearchSubject.next([]);
    this.isSubmitted=true;
    this.courseService.lastStudentSearchValueSubject.subscribe(studentVM=>{
       this.studentSearchForm.patchValue({
        'studentName':this.studentSearchForm.get('studentName').value,
        'courseStartDate':this.studentSearchForm.get('courseStartDate').value,
        'courseEndDate':this.studentSearchForm.get('courseEndDate').value
       });
    }); 
    let startDate=moment(this.studentSearchForm.get('courseStartDate').value);
    let endDate=moment(this.studentSearchForm.get('courseEndDate').value);
    if(startDate.isValid() ==true){
      this.studentSearchForm.value.courseStartDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.studentSearchForm.value.courseEndDate=endDate.format('YYYY/MM/DD');
    }
    //console.log(this.studentSearchForm.value);
    this.reportService.searchCourseByStudent(this.studentSearchForm.value);
  }
  
  reset(){
    this.studentSearchForm.reset();
    this.courseService.courseSearchSubject.next([]);
  }
  ngOnDestroy(): void {
    this.searchDataSubscription.unsubscribe();
  }
}

