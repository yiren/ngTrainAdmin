import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  students=[
    {studentId:1, studentName:"李念中", sectionCode:"J", sectionName:"儀控組"},
    {studentId:2, studentName:"廖經政", sectionCode:"A", sectionName:"策劃組"},
    {studentId:3, studentName:"李宗翰", sectionCode:"N", sectionName:"核析組"},
    {studentId:4, studentName:"謝文龍", sectionCode:"E", sectionName:"電氣組"},
    {studentId:5, studentName:"張漢清", sectionCode:"B", sectionName:"PE II"},
    {studentId:6, studentName:"劉偉宏", sectionCode:"L", sectionName:"PE I"},
    {studentId:7, studentName:"劉家豪", sectionCode:"C", sectionName:"土木組"},
    {studentId:8, studentName:"郭廷宇", sectionCode:"L", sectionName:"廠佈組"},
    {studentId:9, studentName:"陳振瑋", sectionCode:"L", sectionName:"機械組"}
  ];

  studentsBySection= [
    {sectionName: '儀控組', students:[
      {
      studentId: 1,
      studentName: '李念中'
      },
      {
        studentId: 99,
        studentName: '古貽仁'
        },
    ]},
    {sectionName: '機械組', students:[
      {
      studentId: 9,
      studentName: '陳振瑋'
      },
      {
        studentId: 98,
        studentName: '黃茂豪'
        },
    ]},
    {sectionName: '策劃組', students:[
      {
      studentId: 2,
      studentName: '廖經政'
      },
      {
        studentId: 97,
        studentName: '陳淑嬿'
        },
    ]},
    {sectionName: '電氣組', students:[
      {
      studentId: 5,
      studentName: '謝文龍'
      },
      {
        studentId: 96,
        studentName: '蘇慶鴻'
        },
    ]},
    {sectionName: 'PE II', students:[
      {
      studentId: 6,
      studentName: '劉偉宏'
      },
      {
        studentId: 95,
        studentName: '黃于軒'
        },
    ]},
    {sectionName: '核析組', students:[
      {
      studentId: 3,
      studentName: '李宗翰'
      },
      {
        studentId: 94,
        studentName: '林冠宇'
        },
    ]},

  ]

  constructor() { }


  getStudentsBySection(){
    return this.studentsBySection;
  }

}
