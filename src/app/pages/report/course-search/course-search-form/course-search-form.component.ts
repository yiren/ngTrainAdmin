import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService } from '../../../../shared/services/course/course.service';
import { ReportService } from '../../../../shared/services/report/report.service';

@Component({
  selector: 'app-course-search-form',
  templateUrl: './course-search-form.component.html',
  styleUrls: ['./course-search-form.component.scss']
})
export class CourseSearchFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private reportService:ReportService,
              private courserService:CourseService) { }
  

  searchForm:FormGroup;
  ngOnInit() {
    this.searchForm=this.fb.group({
      'courseName':'',
      'courseStartDate':{value:'',disabled:true},
      'courseEndDate':{value:'',disabled:true}
    })
  }

  onSubmit(){
    //console.log(this.searchForm.value)
    let startDate=moment(this.searchForm.get('courseStartDate').value);
    let endDate=moment(this.searchForm.get('courseEndDate').value);
    if(startDate.isValid() ==true){
      this.searchForm.value.courseStartDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.searchForm.value.courseEndDate=endDate.format('YYYY/MM/DD');
    }
    console.log(this.searchForm.value);
    this.reportService.searchCourse(this.searchForm.value);
  }

}
