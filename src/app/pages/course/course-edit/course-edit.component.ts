import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../shared/services/course/course.service';
import { FormBuilder } from '@angular/forms';
import { StudentService } from 'app/shared/services/student/student.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  editCourseForm:FormGroup;
  studentsFormGroup:FormGroup;
  course;
  studentsBySection;
  startDate;
  endDate;
  constructor(private fb:FormBuilder,
              private courseService:CourseService,
              private studentService:StudentService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.course=this.courseService.getEditCourseById(1);
    this.studentsBySection=this.studentService.getStudentsBySection();
    this.studentsFormGroup = this.fb.group({});
    this.studentsBySection.forEach(section => {
      this.studentsFormGroup.addControl(section.sectionCode, new FormControl());
    });
    console.log(this.studentsFormGroup.controls);

    this.course.students.forEach(section => {
      //console.log(section.sectionCode);
      console.log(this.studentsFormGroup.controls[section.sectionCode].setValue(section.students))
    });
    this.studentsFormGroup.controls['A'].setValue([80,2,97]);
    //console.log(this.studentsFormGroup.controls['J'].setValue(this.course.));
    this.editCourseForm = this.fb.group({
      'courseId':this.course.courseId,
      'courseName':[this.course.courseName, Validators.required],
      'courseStartDate':{value:new Date(this.course.courseStartDate),disabled:true},
      'courseEndDate':{value:new Date(this.course.courseEndDate),disabled:true},
      'trainHours':this.course.trainHours,
      'students':this.studentsFormGroup
    });
    //this.startDate=new Date(this.course.courseStartDate);
    //this.endDate=this.course.courseEndDate;
    //console.log(this.editCourseForm);
  }

  onSubmit(){
    console.log(this.editCourseForm.value);
  }
}
