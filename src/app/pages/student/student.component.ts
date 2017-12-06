import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../shared/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  studentsBySection=[];

  ngOnInit() {
    this.studentsBySection=this.studentService.getStudentsBySection();
  }

}
