import { CommonModule } from '@angular/common';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailComponent } from 'app/pages/course/course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScoreComponent } from './course-score/course-score.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const COURSE_ROUTE = [
  {path: '', component: CourseListComponent},
  {path: 'add', component: CourseAddComponent},
  {path: ':courseId/detail', component: CourseDetailComponent},
  {path: ':courseId/edit', component: CourseEditComponent},
  {path: ':courseId/score', component: CourseScoreComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(COURSE_ROUTE)
  ],
  declarations: [
     CourseAddComponent,
     CourseListComponent,
     CourseEditComponent,
     CourseScoreComponent,
     CourseDetailComponent
    ]
})
export class CourseModule { }
