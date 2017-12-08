import { AddStudentDialogComponent } from '../../shared/components/add-student-dialog/add-student-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentComponent } from './student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const STUDENT_ROUTE = [
  { path: '', component: StudentComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'edit', component: StudentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(STUDENT_ROUTE)
  ],
  declarations: [
  StudentComponent,
  StudentEditComponent,
  StudentAddComponent,
  AddStudentDialogComponent
  ],
  entryComponents:[
    AddStudentDialogComponent
  ]
})
export class StudentModule { }
