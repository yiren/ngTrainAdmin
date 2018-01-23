import { AverageTrainSearchFormComponent } from './get-average-train-hours/average-train-search-form/average-train-search-form.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseSearchDetailComponent } from './course-search/course-search-detail/course-search-detail.component';
import { CourseSearchFormComponent } from 'app/pages/report/course-search/course-search-form/course-search-form.component';
import { CourseSearchResultComponent } from 'app/pages/report/course-search/course-search-result/course-search-result.component';
import { GetAverageTrainHoursComponent } from './get-average-train-hours/get-average-train-hours.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionSearchComponent } from './section-search/section-search.component';
import { SectionSearchFormComponent } from './section-search/section-search-form/section-search-form.component';
import { SectionSearchResultComponent } from './section-search/section-search-result/section-search-result.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentSearchFormComponent } from './student-search/student-search-form/student-search-form.component';
import { StudentSearchResultComponent } from './student-search/student-search-result/student-search-result.component';

const REPORT_ROUTE = [
  { path: 'getaveragetrainhours', component: GetAverageTrainHoursComponent },
  { path: 'searchbysection', component:SectionSearchComponent  },
  {path: 'searchbycourse', component: CourseSearchComponent},
  {path: 'searchbystudent', component: StudentSearchComponent}
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(REPORT_ROUTE)
  ],
  declarations: [
    GetAverageTrainHoursComponent, 
    AverageTrainSearchFormComponent, SectionSearchComponent, SectionSearchFormComponent, 
    SectionSearchResultComponent,
    CourseSearchComponent,
    CourseSearchFormComponent,
    CourseSearchDetailComponent,
    CourseSearchResultComponent,
    StudentSearchComponent,
    StudentSearchFormComponent,
    StudentSearchResultComponent ]
})
export class ReportModule { }
