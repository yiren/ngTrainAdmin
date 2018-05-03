import * as _ from 'lodash';
import * as fromApp from '../../store/app.states';
import * as fromStudent from './store/student.actions';

import { Component, OnInit } from '@angular/core';
import { StudentState, selectStudentLoaded } from './store/student.reducers';

import { AddStudentDialogComponent } from '../../shared/components/add-student-dialog/add-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { Section } from '../section/store/section.states';
import { Store } from '@ngrx/store';
import { StudentService } from '../../shared/services/student/student.service';
import { Subscription } from 'rxjs/Subscription';
import { selectAllStudents } from './store/student.selectors';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService,
              private store:Store<StudentState>,
              public dialog:MatDialog) { }

  sectionSubscription:Subscription;
  subscriptions:Subscription[];
  studentsBySection = [];
  sections = [];
  student={
    studentName:'',
    sectionId:1
  };
  isLoaded$:Observable<boolean>
  sections$:Observable<Section[]>;
  ngOnInit() {
    //this.store.dispatch(new fromStudent.LoadStudentsAction());
    this.sections$=this.store.select(selectAllStudents);
    this.isLoaded$=this.store.select(selectStudentLoaded);
    // this.studentService.getSections();
    // this.sectionSubscription = 
    //   this.studentService.studentSubject
    //       .subscribe((sections:any[]) => {
    //         this.studentsBySection = sections;
    //         this.sections=_.cloneDeep(sections);
    //         this.studentsBySection.forEach(section => {
    //           //console.log(section);
    //           //this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
    //       });
    // });
    //this.studentsBySection=this.studentService.getStudentsBySection();
    //this.sections=this.studentService.getSections();
    //console.log(this.sections);
  }

  OnAddStudentDialog(){
    let dialogRef=this.dialog.open(AddStudentDialogComponent,{
      data:{
        student:this.student,
        sections:this.sections
      }
    });
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe((student)=>{
      //console.log(student + ' added');
      this.studentService.addStudent(student);
    });
  }
  //
  updateStudent(student, sectionId){
    //console.log(student.studentName);
    if(student.studentName == ''){
      console.log("Error");
    }else{
      this.studentService.updateStudent(student);
    }
  }
  deleteStudent(student){
    if(confirm("確認刪除!?"))
    this.studentService.deleteStudent(student);
  }
}
