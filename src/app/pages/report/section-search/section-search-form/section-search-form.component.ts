import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ReportService } from '../../../../shared/services/report/report.service';
import { SectionService } from '../../../../shared/services/section/section.service';

@Component({
  selector: 'app-section-search-form',
  templateUrl: './section-search-form.component.html',
  styleUrls: ['./section-search-form.component.scss']
})
export class SectionSearchFormComponent implements OnInit {

  constructor(
              private sectionService:SectionService,
              private reportService:ReportService,
              private fb:FormBuilder) { }

  sectionForm:FormGroup;

  sections$;
  ngOnInit() {
    this.sections$=this.sectionService.sectionSubject;
    this.sectionService.getSectionList();
    this.sectionForm=this.fb.group({
      'sectionId':'',
      'startDate':{value:'',disabled:true},
      'endDate':{value:'',disabled:true}
    });
  }
  onSubmit(){
    
    let startDate=moment(this.sectionForm.get('startDate').value);
    let endDate=moment(this.sectionForm.get('endDate').value);
    if(startDate.isValid() ==true){
      this.sectionForm.value.startDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.sectionForm.value.endDate=endDate.format('YYYY/MM/DD');
    }
    console.log(this.sectionForm.value);
    this.reportService.searchCourseBySection(this.sectionForm.value);
  }
}
