import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search-detail',
  templateUrl: './course-search-detail.component.html',
  styleUrls: ['./course-search-detail.component.scss']
})
export class CourseSearchDetailComponent implements OnInit {

  constructor() { }


  @Input()
  course;


  ngOnInit() {
    
  }

  
}
