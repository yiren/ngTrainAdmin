import * as moment from 'moment';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService } from '../../../../shared/services/course/course.service';
import { Observable } from 'rxjs/Observable';
import { ReportService } from '../../../../shared/services/report/report.service';
import { SectionService } from '../../../../shared/services/section/section.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-section-search-form',
  templateUrl: './section-search-form.component.html',
  styleUrls: ['./section-search-form.component.scss']
})
export class SectionSearchFormComponent implements OnInit, OnDestroy {

  constructor(
              private sectionService:SectionService,
              private reportService:ReportService,
              private courseService:CourseService,
              private fb:FormBuilder) { }
  
  searchDataSubscription:Subscription;
  sectionForm:FormGroup;

  @Input()
  data:Observable<any[]>;
  isSubmitted;
  searchData;
  sections$;
  ngOnInit() {
    this.sections$=this.sectionService.sectionSubject;
    this.sectionService.getSectionList();
    this.sectionForm=this.fb.group({
      'sectionId':'',
      'startDate':{value:'',disabled:true},
      'endDate':{value:'',disabled:true}
    });
    this.searchDataSubscription = this.data.subscribe(res=>{
      this.searchData = res;
      //console.log(this.searchData);
    });
    this.isSubmitted=false;
  }
  onSubmit(){
    this.isSubmitted=true;
    let startDate=moment(this.sectionForm.get('startDate').value);
    let endDate=moment(this.sectionForm.get('endDate').value);
    if(startDate.isValid() ==true){
      this.sectionForm.value.startDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.sectionForm.value.endDate=endDate.format('YYYY/MM/DD');
    }
    //console.log(this.sectionForm.value);
    this.reportService.searchCourseBySection(this.sectionForm.value);
  }

  reset(){
    this.sectionForm.reset();
    this.courseService.courseSubject.next([]);
    //this.courseService.studentSearchSubject.next([]);
  }
  ngOnDestroy(): void {
    this.searchDataSubscription.unsubscribe();
  }

}
