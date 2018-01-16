import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CourseService } from '../../../../shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { StudentService } from 'app/shared/services/student/student.service';
import { map } from 'rxjs/operator/map';
import { startWith } from 'rxjs/operator/startWith';

@Component({
  selector: 'app-student-search-form',
  templateUrl: './student-search-form.component.html',
  styleUrls: ['./student-search-form.component.scss']
})
export class StudentSearchFormComponent implements OnInit {

  constructor(private courseService:CourseService,
              private studentService:StudentService,
              private fb:FormBuilder) { }

  studentSearchForm:FormGroup;
  students:any[];
  filteredStudents:Observable<any[]>;
  ngOnInit() {
    
    this.studentSearchForm=this.fb.group({
      'studentName':['', Validators.required],
      'courseStartDate':'',
      'courseEndDate':''
    });
    this.studentService.getStudents()
        .subscribe(students=>{
          this.students=students;
          this.filteredStudents=this.studentSearchForm.get('studentName').valueChanges
                              .startWith('')
                              .map(studentName=>studentName ? this.filterStudents(studentName):this.students.slice());
        });
        
          
    

    
        
    
  }
  isValid=false;

  filterStudents(name:string){
    return this.students.filter(student=>student.studentName.indexOf(name)===0)
  }
  onSubmit(){
    let startDate=moment(this.studentSearchForm.get('courseStartDate').value);
    let endDate=moment(this.studentSearchForm.get('courseEndDate').value);
    if(startDate.isValid() ==true){
      this.studentSearchForm.value.courseStartDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.studentSearchForm.value.courseEndDate=endDate.format('YYYY/MM/DD');
    }
    console.log(this.studentSearchForm.value);
    this.courseService.searchCourseByStudent(this.studentSearchForm.value);
  }
  
 
}

export interface Student{
  studentName:string;
  
}