import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentEditComponent } from './edit/student-edit.component';

const STUDENT_ROUTE = [
  { path: '', component: StudentComponent },
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
  ]
})
export class StudentModule { }
