import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailComponent } from 'app/pages/course/course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScoreComponent } from './course-score/course-score.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseSearchDetailComponent } from './course-search/course-search-detail/course-search-detail.component';
import { CourseSearchFormComponent } from './course-search/course-search-form/course-search-form.component';
import { CourseSearchResultComponent } from './course-search/course-search-result/course-search-result.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionSearchComponent } from './course-search/section-search/section-search.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentSearchFormComponent } from './student-search/student-search-form/student-search-form.component';
import { StudentSearchResultComponent } from './student-search/student-search-result/student-search-result.component';

const COURSE_ROUTE = [
  {path: '', component: CourseListComponent},
  {path: 'add', component: CourseAddComponent},
  {path: ':courseId/detail', component: CourseDetailComponent},
  {path: ':courseId/edit', component: CourseEditComponent},
  {path: ':courseId/score', component: CourseScoreComponent},
  {path: 'searchbycourse', component: CourseSearchComponent},
  {path: 'searchbystudent', component: StudentSearchComponent}
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(COURSE_ROUTE)
  ],
  declarations: [
     CourseAddComponent,
     CourseListComponent,
     CourseEditComponent,
     CourseScoreComponent,
     CourseDetailComponent,
     CourseSearchComponent,
     CourseSearchFormComponent,
     CourseSearchResultComponent,
     SectionSearchComponent,
     CourseSearchDetailComponent,
     StudentSearchComponent,
     StudentSearchFormComponent,
     StudentSearchResultComponent
    ]
})
export class CourseModule { }
