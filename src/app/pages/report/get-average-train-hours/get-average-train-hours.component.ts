import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReportService } from '../../../shared/services/report/report.service';

@Component({
  selector: 'app-get-average-train-hours',
  templateUrl: './get-average-train-hours.component.html',
  styleUrls: ['./get-average-train-hours.component.scss']
})
export class GetAverageTrainHoursComponent implements OnInit {

  constructor(private reportService:ReportService,
              private fb:FormBuilder) { }

  averageForm:FormGroup;
  averageTrainhours;
  isSubmitted=false;
  
  ngOnInit() {
    this.averageForm=this.fb.group({
      'startDate':[{value:'', disabled:true}],
      'endDate':[{value:'', disabled:true}],
    });
  }
  onSubmit(){
    this.isSubmitted=false;
    let startDate=moment(this.averageForm.get('startDate').value);
    let endDate=moment(this.averageForm.get('endDate').value);
    if(startDate.isValid() ==true){
      this.averageForm.value.startDate=startDate.format('YYYY/MM/DD');
    };
    if(endDate.isValid()==true){
      this.averageForm.value.endDate=endDate.format('YYYY/MM/DD');
    }
    console.log(this.averageForm.value);
    this.reportService.getAverageTrainHours(this.averageForm.value)
        .subscribe(value=>{
          //console.log(value);
          this.isSubmitted=true;
          this.averageTrainhours=value;
          
          }
        );

  }

}
