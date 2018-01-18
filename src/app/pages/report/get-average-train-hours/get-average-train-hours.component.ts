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
  ngOnInit() {
    this.averageForm=this.fb.group({
      'startDate':[{value:'', disabled:true}],
      'endDate':[{value:'', disabled:true}],
    });
  }
  onSubmit(){
    this.reportService.getAverageTrainHours(this.averageForm.value)
        .subscribe(value=>{
          console.log(value);
          this.averageTrainhours=value;
          }
        );

  }

}
