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
  sections=[];

  ngOnInit() {
    this.studentsBySection=this.studentService.getStudentsBySection();
    this.sections=this.studentService.getSections();
  }

  updateStudent(student, sectionId){
    console.log(student.studentName);
    
    if(student.studentName ==''){
      console.log("Error");
    }else if(student.sectionId==sectionId){
      console.log("not Changed");
    }else{
      this.studentService.updateStudent(student, sectionId);
    }
    
  }

}
