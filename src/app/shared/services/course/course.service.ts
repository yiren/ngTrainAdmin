import 'rxjs/operators/share';
import 'rxjs/operators/catchError';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Course } from '../../../pages/course/store/course.states';
import { CourseSearch } from 'app/shared/model/CourseSearch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StudentService } from 'app/shared/services/student/student.service';

@Injectable()
export class CourseService {

  
  constructor(public studentService:StudentService,
              public httpClient:HttpClient) { }

  studentSearchSubject=new BehaviorSubject([]);
  searchKeywordSubject=new BehaviorSubject('');
  courseSubject=new BehaviorSubject([]);
  paginatedcourseSubject=new BehaviorSubject({});
  courseSearchSubject=new BehaviorSubject([]);
  lastStudentSearchValueSubject=new BehaviorSubject({
    studentName:'',
    courseStartDate:'',
    courseEndDate:''
  });
  API_ENPOINT = '/api/courses';

  getCourseList() {

    this.httpClient.get<Course[]>(this.API_ENPOINT)
        .do(console.log)
        .subscribe(courses=>{
          this.courseSubject.next(courses)
        });
    //return this.courses;
  }

  getCourseDetailById(id){
    return this.httpClient.get<Course>(`${this.API_ENPOINT}/${id}`)

                          .share();
  }

  getStudentScoreById(id){
    return this.studentsWithScore1;
  }

  
  getPaginatedCourses(pageIndex, pageSize, keyword='') {
    //const data=JSON.stringify({pageIndex:pageIndex, pageSize:pageSize});
    //console.log(data);
    //console.log({pageIndex:pageIndex, pageSize:pageSize, keyword:keyword});
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.API_ENPOINT}/getpaginatedcourses`, {pageIndex:pageIndex, pageSize:pageSize, keyword:keyword});
    //.catchError(x=>Observable.throw(x));
  }
  updateStudentScoreById(courseId,updateScore){
    let header = new HttpHeaders();
    const body=JSON.stringify(updateScore);
    //console.log(body);
    header.append('Content-Type', 'application/json');
    return this.httpClient.put(`${this.API_ENPOINT}/${courseId}/score`, updateScore,{headers:header})
  }

  addCourse(course){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.post(this.API_ENPOINT, course);
  }

  updateCourse(courseId, course){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.put(`${this.API_ENPOINT}/${courseId}`, course,{headers:header});  
  }

  deleteCourse(courseId){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${this.API_ENPOINT}/${courseId}`,{headers:header});
  }

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
}
