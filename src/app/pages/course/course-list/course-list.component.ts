import * as _ from 'lodash';

import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Course } from '../../../shared/model/course';
import { CourseService } from 'app/shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { StudentService } from '../../../shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  
  constructor(private courseService:CourseService,
              private studentService:StudentService,
              private router:Router) { }
  isLoadingResults=true;
  courseSubscription:Subscription;
  courseDataSource=new MatTableDataSource<Course>();
  totalRecord;
  displayedColumns = ['courseName', 'courseStartDate', 'courseEndDate', 'trainHours', 'courseId'];
  ngOnInit() {

        this.courseService.getCourseList();
        this.courseService.courseSubject.subscribe(data=>{
        //console.log(data);
          this.totalRecord=data.length;
          this.isLoadingResults=false;
          this.courseDataSource.data = data; 
      });
      
  }
  ngAfterViewInit(): void {
    this.courseDataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.courseDataSource.filter = filterValue;
     // MatTableDataSource defaults to lowercase matches
  }

  
  
}

// export class CourseDataSource extends DataSource<Course>{
//   constructor(private courseService:CourseService){
//     super();
//   }
//   courses=Observable.of(this.courseService.getCourseList());
//   connect():Observable<Course[]>{
//     console.log(this.courses);
//     return this.courses;
//   }
//   filter(keyword){
//     console.log(keyword);
//     console.log(this.courses.map(
//       courses=>courses.filter(course=>course.courseName.includes(keyword))));
//     return this.courses.map(
//       courses=>courses.filter(course=>{
//         console.log(course.courseName.includes(keyword));
//         course.courseName.includes(keyword);

//       }));
//   }

//   disconnect(){

//   }
// }
