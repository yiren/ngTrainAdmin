import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../../shared/services/course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course;

  constructor(private courseService:CourseService,
              private route:ActivatedRoute,
              private router:Router) { }
              
  ngOnInit() {
    this.course=this.courseService.getCourseDetailById(1);
    
  }

  

}
