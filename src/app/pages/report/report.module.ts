import { AverageTrainSearchFormComponent } from './get-average-train-hours/average-train-search-form/average-train-search-form.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { GetAverageTrainHoursComponent } from './get-average-train-hours/get-average-train-hours.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const REPORT_ROUTE = [
  { path: 'getaveragetrainhours', component: GetAverageTrainHoursComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(REPORT_ROUTE)
  ],
  declarations: [GetAverageTrainHoursComponent, AverageTrainSearchFormComponent]
})
export class ReportModule { }
