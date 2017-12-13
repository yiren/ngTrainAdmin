import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../../../shared/services/course/course.service';

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { StudentService } from '../../../shared/services/student/student.service';
import {filter} from 'rxjs/operator/filter';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  
  constructor(private courseService:CourseService,
              private studentService:StudentService) { }

  courseDataSource = new CourseDataSource(this.courseService);
  displayedColumns = ['courseName', 'courseStartDate', 'courseEndDate', 'trainHours', 'courseId'];
  ngOnInit() {
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.courseDataSource.filter(filterValue).subscribe();
     // MatTableDataSource defaults to lowercase matches
  }
}

export class CourseDataSource extends DataSource<Course>{
  constructor(private courseService:CourseService){
    super();
  }
  courses=Observable.of(this.courseService.getCourseList());
  connect():Observable<Course[]>{
    console.log(this.courses);
    return this.courses;
  }
  filter(keyword){
    console.log(keyword);
    console.log(this.courses.map(
      courses=>courses.filter(course=>course.courseName.includes(keyword))));
    return this.courses.map(
      courses=>courses.filter(course=>{
        console.log(course.courseName.includes(keyword));
        course.courseName.includes(keyword);

      }));
  }

  disconnect(){

  }
}
