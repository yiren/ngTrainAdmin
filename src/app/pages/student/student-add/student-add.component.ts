import { Component, OnInit } from '@angular/core';

import { AddStudentDialogComponent } from 'app/shared/components/add-student-dialog/add-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

 

}
