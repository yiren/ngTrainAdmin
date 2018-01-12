import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService } from '../../../../shared/services/course/course.service';

@Component({
  selector: 'app-course-search-form',
  templateUrl: './course-search-form.component.html',
  styleUrls: ['./course-search-form.component.scss']
})
export class CourseSearchFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private courserService:CourseService) { }
  

  searchForm:FormGroup;
  ngOnInit() {
    this.searchForm=this.fb.group({
      'courseName':'',
      'courseStartDate':'',
      'courseEndDate':''
    })
  }

  onSubmit(){
    console.log(this.searchForm.value)
    this.courserService.searchCourse(this.searchForm.value);
  }

}
