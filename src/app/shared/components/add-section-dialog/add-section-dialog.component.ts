import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-add-section-dialog',
  templateUrl: './add-section-dialog.component.html',
  styleUrls: ['./add-section-dialog.component.scss']
})
export class AddSectionDialogComponent implements OnInit {

  constructor(
              public dialogRef:MatDialogRef<AddSectionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit() {

  }

}
