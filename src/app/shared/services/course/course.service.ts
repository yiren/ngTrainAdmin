import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Course } from '../../model/Course';
import { Injectable } from '@angular/core';
import { StudentService } from 'app/shared/services/student/student.service';

@Injectable()
export class CourseService {

  constructor(public studentService:StudentService,
              public httpClient:HttpClient) { }



  

  studentsWithScore1=[
    {
      studentId:80,
      studentName:"黃聖翔",
      sectionName:"策劃組",
      score:"N/A"
    },
    {
      studentId:83,
      studentName:"詹士智",
      sectionName:"核析組",
      score:"N/A"
    },
    {
      studentId:82,
      studentName:"陳夷汀",
      sectionName:"廠佈組",
      score:"N/A"
    },
  ]

  courses=[
    {
      courseId:1,
      courseName:"健康職場講座-姿勢好.運動對.痠痛說掰掰",
      courseStartDate:"2017/12/12",
      courseEndDate:"2017/12/12",
      trainHours:2.0
    },
    {
      courseId:2,
      courseName:"106-1期「大型發電機測試及維護班」",
      courseStartDate:"2017/12/04",
      courseEndDate:"2017/12/08",
      trainHours:27.0
    },
    {
      courseId:3,
      courseName:"106-1期「軸承與潤滑班」",
      courseStartDate:"2017/10/05",
      courseEndDate:"2017/10/13",
      trainHours:28.0
    }
  ];

  courseDetail1={
    courseId:1,
    courseName:"健康職場講座-姿勢好.運動對.痠痛說掰掰",
    courseStartDate:"2017/12/12",
    courseEndDate:"2017/12/12",
    trainHours:24.5,
    students:this.studentsWithScore1
  }

  studentsByCourse1=[
    {
      sectionId:3,
      sectionCode:'A',
      students:[80,2,97]
    },
    {
      sectionId:7,
      sectionCode:'P',
      students:[81]
    },
    {
      sectionId:6,
      sectionCode:"N",
      students:[82,3]
    }
  ];
  editCourse1={
    courseId:1,
    courseName:"健康職場講座-姿勢好.運動對.痠痛說掰掰",
    courseStartDate:"2017/12/12",
    courseEndDate:"2017/12/12",
    trainHours:24.5,
    students:this.studentsByCourse1
  }

  studentsByCourse2={
    
  }
  
  studentsByCourse3={
    studentName:"李文祥",
    socre:"84"
  }

  API_ENPOINT = 'http://localhost:62867/api/courses';

  getCourseList() {

    return this.httpClient.get<Course[]>(this.API_ENPOINT)
               

    //return this.courses;
  }

  getEditCourseById(id){
    return this.editCourse1;
  }

  updateEditCourseBy(id){
    
  }

  getCourseDetailById(id){
    return this.httpClient.get<Course>(`${this.API_ENPOINT}/${id}`)
                          .share();
  }

  getStudentScoreById(id){
    return this.studentsWithScore1;
  }

  updateStudentScoreById(id){

  }

  addCourse(course){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.post(this.API_ENPOINT, course,{headers:header});
  }

  updateCourse(courseId, course){
      
  }

  deleteCourse(courseId){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${this.API_ENPOINT}/${courseId}`,{headers:header});
  }

}
