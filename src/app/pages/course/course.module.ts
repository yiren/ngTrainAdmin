import { courseDataReducer, courseUiReducer } from './store/course.reducers';

import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseEffects } from './store/course.effects';
import { CourseFeatureState } from './store/course.states';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseScoreComponent } from './course-score/course-score.component';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {StoreModule} from '@ngrx/store';

const COURSE_ROUTE = [
  {path: '', component: CourseListComponent},
  {path: 'add', component: CourseAddComponent},
  {path: ':courseId/detail', component: CourseDetailComponent},
  {path: ':courseId/edit', component: CourseEditComponent},
  {path: ':courseId/score', component: CourseScoreComponent},
 
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(COURSE_ROUTE),
    StoreModule.forFeature('courseDataState', courseDataReducer),
    StoreModule.forFeature('courseUiState', courseUiReducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  declarations: [
     CourseAddComponent,
     CourseListComponent,
     CourseEditComponent,
     CourseScoreComponent,
     CourseDetailComponent,
    
     
    ]
})
export class CourseModule { }
