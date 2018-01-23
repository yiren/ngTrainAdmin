import * as _ from 'lodash';

import { AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Course } from '../../../shared/model/course';
import { CourseService } from 'app/shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { StudentService } from '../../../shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/operator/merge';
import { startWith } from 'rxjs/operator/startWith';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    //this.courseService.searchKeywordSubject.next('');
  }
  
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  @ViewChild(MatSort) sort:MatSort;
  constructor(private courseService:CourseService,
              private studentService:StudentService,
              private router:Router) { }
  
  isLoadingResults=false;
  keyword;  
  courseSubscription:Subscription;
  courseDataSource=new MatTableDataSource<Course>();
  totalRecord;
  dataRecord;
  displayedColumns = ['courseName', 'courseStartDate', 'courseEndDate', 'trainHours', 'courseId'];
  ngOnInit() {
        this.courseService.searchKeywordSubject.subscribe(term=>this.keyword=term);
        this.courseService.getCourseList();
        this.courseService.courseSubject.subscribe(data=>{
          //console.log(data);
          this.totalRecord = data.length;
          this.isLoadingResults = false;
          this.courseDataSource.data= data;
          
        });
  }
  
  ngAfterViewInit(): void {
    //this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    
    this.courseDataSource.filter = this.keyword;
    this.courseDataSource.paginator = this.paginator;
    this.courseDataSource.sort=this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.courseDataSource.filter = filterValue;
    this.courseService.searchKeywordSubject.next(filterValue);
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
