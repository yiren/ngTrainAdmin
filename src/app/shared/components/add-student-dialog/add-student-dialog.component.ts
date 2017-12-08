import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {

  studentForm:FormGroup;
  constructor(private fb:FormBuilder,
              public dialogRef: MatDialogRef<AddStudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      'studentName': ['', Validators.required],
      'sectionId': ['', Validators.required]
    });
  }


  onSubmit(data){

  }

}
