import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { StudentService } from 'app/shared/services/student/student.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  addCourseForm:FormGroup;
  studentsFormGroup:FormGroup;

  constructor(private fb:FormBuilder,
              private studentService:StudentService) { }

  
  studentsBySection;
  
  typical={
    courseName:'中國電機工程學會「106年度會員大會」',
    CourseStartDate:'',
    CourseEndDate:'',
    TrainHours:30
  }
  checked;
  ngOnInit() {
    this.studentsBySection = this.studentService.getStudentsBySection();
    this.studentsFormGroup = this.fb.group({});
    this.studentsBySection.forEach(section => {
      this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
    });
    this.addCourseForm = this.fb.group({
      'courseName':['', Validators.required],
      'courseStartDate':{value:'',disabled:true},
      'courseEndDate':{value:'',disabled:true},
      'trainHours':'',
      'students':this.studentsFormGroup
    });
  }

  onSubmit(){
    this.studentService.addStudent(this.addCourseForm.value);
    console.log(this.addCourseForm.value);
  }
}
