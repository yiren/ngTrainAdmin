import * as _ from 'lodash';

import { AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Course, CourseFeatureState, CourseState, CourseUiState, PaginatedCourses } from '../store/course.states';
import { GetCourseByPageAction, SetKeywordAction, SetPaginationParametersAction } from '../store/course.actions';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { AppState } from '../../../store/app.states';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CourseService } from 'app/shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StudentService } from '../../../shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators/map';
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
  pager:Observable<any>;
  courseState$:Observable<CourseState>;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private courseService:CourseService,
              private studentService:StudentService,
              private store:Store<CourseFeatureState>,
              private router:Router) { }
  subscriptions:Subscription[]=[];
  isLoadingResults=true;
  keyword='';  
  courseSubscription:Subscription;
  courseDataSource=new MatTableDataSource<Course>();
  totalRecord;
  dataRecord;

  uiState$:Observable<CourseUiState>;
  displayedColumns = ['courseName', 'courseStartDate', 'courseEndDate', 'trainHours', 'courseId'];
  ngOnInit() {
        
        this.uiState$=this.store.select('courseUiState');
        this.initPaginatedCourses();
        this.store.select('courseDataState').skip(1).subscribe(data=>{
         //console.log(data);

          
            this.isLoadingResults=false;
            this.totalRecord = data.paginatedCourses.recordCount;
          
            this.courseDataSource.data= data.paginatedCourses.courses;
          
        })
        
        //this.courseService.searchKeywordSubject.subscribe(term=>this.keyword=term);
        
  }
  initPaginatedCourses(){
    this.uiState$.subscribe(uiState=>{
      const uiData={pageIndex:uiState.pageIndex, pageSize:uiState.pageSize, keyword:uiState.keyword};
      //console.log(uiData);
      this.store.dispatch(new GetCourseByPageAction(uiData));
    });
  }

  ngAfterViewInit(): void {
    //console.log(this.paginator);
    this.paginator.page
            // .pipe(
            //   switchMap(() => {
            //     this.isLoadingResults=true;
            //     return this.courseService.getPaginatedCourses(this.paginator.pageIndex, this.paginator.pageSize)
            // }),
            // map(data=>{
            //   this.isLoadingResults=false;
            //   return data;
            // })
            .subscribe(()=>
              this.store.dispatch(new SetPaginationParametersAction({pageIndex:this.paginator.pageIndex, pageSize:this.paginator
              .pageSize}))
            );
    //this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //this.courseDataSource.filter = this.keyword;
    //this.courseDataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.paginator.firstPage();
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.isLoadingResults=true;
    this.store.dispatch(new SetKeywordAction(filterValue));
    // this.courseService.getPaginatedCourses(this.paginator.pageIndex, this.paginator.pageSize, filterValue)
    //            .subscribe(data=>{
    //               this.isLoadingResults=false;
    //               this.courseService.searchKeywordSubject.next(filterValue);
    //               this.courseService.paginatedcourseSubject.next(data);
    //            })
    
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
