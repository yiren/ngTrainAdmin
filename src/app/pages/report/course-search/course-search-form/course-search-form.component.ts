import * as moment from 'moment';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResetSearchDataAction, ResetSearchUiAction, SearchByCourseNameAction, SetSearchUiAction } from '../../store/search.actions';

import { CourseService } from '../../../../shared/services/course/course.service';
import { ReportService } from '../../../../shared/services/report/report.service';
import { SearchFeatureState } from '../../store/search.states';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-course-search-form',
  templateUrl: './course-search-form.component.html',
  styleUrls: ['./course-search-form.component.scss']
})
export class CourseSearchFormComponent implements OnInit, OnDestroy {
  

  constructor(private fb:FormBuilder,
              private reportService:ReportService,
              private courseService:CourseService,
              private store:Store<SearchFeatureState>) { }
  
  isSubmitted;
  searchForm:FormGroup;
  searchData:any[];
  courseSearchSubscription:Subscription;
  ngOnInit() {
    this.searchForm=this.fb.group({
      'courseName':'',
      'courseStartDate':{value:'',disabled:true},
      'courseEndDate':{value:'',disabled:true}
    });
    this.courseSearchSubscription=this.reportService.courseExportSubject.subscribe(res=>this.searchData=res);
    this.isSubmitted=false;
  }

  onSubmit(){
    
    this.isSubmitted=true;
    //console.log(this.searchForm.value)
    let startDate=moment(this.searchForm.get('courseStartDate').value);
    let endDate=moment(this.searchForm.get('courseEndDate').value);
    if(!this.searchForm.get('courseName')){
      this.searchForm.value.courseName=''
    }
    if(startDate.isValid() ==true){
      this.searchForm.value.courseStartDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.searchForm.value.courseEndDate=endDate.format('YYYY/MM/DD');
    }
    //this.courseService.courseSearchSubject.next([]);
    this.searchForm.value.queryOption=1;
    //console.log(this.searchForm.value);
    //this.reportService.searchCourse(this.searchForm.value);
    this.store.dispatch(new SetSearchUiAction(this.searchForm.value));
    
  }

  reset(){
    this.searchForm.reset();
    //this.courseService.courseSearchSubject.next([]);
    //this.courseService.studentSearchSubject.next([]);
    this.store.dispatch(new ResetSearchUiAction());
  }

  ngOnDestroy(): void {
    this.courseSearchSubscription.unsubscribe();
  }

}
