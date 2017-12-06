import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../../shared/services/student/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    
  }

}
