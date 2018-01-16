import { AddStudentDialogComponent } from '../../shared/components/add-student-dialog/add-student-dialog.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentComponent } from './student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentScoreComponent } from './student-score/student-score.component';

const STUDENT_ROUTE = [
  { path: '', component: StudentComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'edit', component: StudentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(STUDENT_ROUTE)
  ],
  declarations: [
  StudentComponent,
  StudentEditComponent,
  StudentAddComponent,
  AddStudentDialogComponent,
  StudentScoreComponent
  ],
  entryComponents:[
    AddStudentDialogComponent
  ]
})
export class StudentModule { }
