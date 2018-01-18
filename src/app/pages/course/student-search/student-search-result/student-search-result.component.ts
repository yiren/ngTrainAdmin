import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Course } from '../../../../shared/model/Course';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student-search-result',
  templateUrl: './student-search-result.component.html',
  styleUrls: ['./student-search-result.component.scss']
})
export class StudentSearchResultComponent implements OnInit, AfterViewInit {
  

  @ViewChild(MatPaginator) paginator:MatPaginator;

  @Input()
  data:Observable<Course[]>;

  displayedColumns = ['courseName', 'courseStartDate', 'courseEndDate', 'trainHours', 'courseId'];

  courseDataSource:MatTableDataSource<Course>;

  constructor() { }

  ngOnInit() {
    this.data.subscribe((courses:Course[])=>{
      this.courseDataSource=new MatTableDataSource<Course>(courses);
    })
  }

  ngAfterViewInit(): void {
    this.courseDataSource.paginator=this.paginator;
  }

}
