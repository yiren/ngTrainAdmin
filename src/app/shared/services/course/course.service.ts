import { Injectable } from '@angular/core';

export interface Course{
  courseId:number;
  courseName:string;
  courseStartDate:string;
  courseEndDate:string;
  trainHours:number;
}

@Injectable()
export class CourseService {

  constructor() { }


  courses:Course[]=[
    {
      courseId:1,
      courseName:"健康職場講座-姿勢好.運動對.痠痛說掰掰",
      courseStartDate:"2017/12/12",
      courseEndDate:"2017/12/12",
      trainHours:2.0,
    },
    {
      courseId:2,
      courseName:"106-1期「大型發電機測試及維護班」",
      courseStartDate:"2017/12/04",
      courseEndDate:"2017/12/08",
      trainHours:27.0,
    },
    {
      courseId:3,
      courseName:"106-1期「軸承與潤滑班」",
      courseStartDate:"2017/10/05",
      courseEndDate:"2017/10/13",
      trainHours:28.0,
    }
  ]

  studentsByCourse1=[
    {
      studentName:"黃聖翔",
      score:""
    },
    {
      studentName:"陳夷汀",
      score:""
    },
    {
      studentName:"詹士智",
      score:""
    }
  ];

  studentsByCourse2={
    
  }
  
  studentsByCourse3={
    studentName:"李文祥",
    socre:"84"
  }

  getCourseList(){
    return this.courses;
  }

  addCourse(course){
    //(this.courses).push(course);
  }

  updateCourse(courseId, course){
    
  }

  deleteCourse(courseId){
    
  }

}
