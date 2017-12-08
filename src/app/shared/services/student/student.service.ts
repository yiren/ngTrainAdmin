import * as _ from 'lodash';

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

  sections=[
    {sectionId: 1, sectionName: '儀控組'},
    {sectionId: 2, sectionName: '機械組'},
    {sectionId: 3, sectionName: '策劃組'},
    {sectionId: 4, sectionName: '電氣組'},
    {sectionId: 5, sectionName: 'PE II'},
    {sectionId: 6, sectionName: '核析組'}
  ];

  studentsBySection = [
    {sectionId: 1, sectionName: '儀控組', students:[
      {
      studentId: 1,
      studentName: '李念中',
      sectionId: 1
      },
      {
        studentId: 99,
        studentName: '古貽仁',
        sectionId:1
        },
    ]},
    {sectionId: 2, sectionName: '機械組', students:[
      {
      sectionId: 2,
      studentId: 9,
      studentName: '陳振瑋'
      },
      
      {
        sectionId: 2,
        studentId: 98,
        studentName: '黃茂豪'
        },
    ]},
    {sectionId: 3, sectionName: '策劃組', students:[
      {
        sectionId: 3,
      studentId: 2,
      studentName: '廖經政'
      },
      {
        sectionId: 3,
        studentId: 97,
        studentName: '陳淑嬿'
        },
    ]},
    {sectionId: 4, sectionName: '電氣組', students:[
      {
        sectionId: 4,
      studentId: 5,
      studentName: '謝文龍'
      },
      {
        sectionId: 4,
        studentId: 96,
        studentName: '蘇慶鴻'
        },
    ]},
    {sectionId: 5, sectionName: 'PE II', students:[
      {
        sectionId: 5,
      studentId: 6,
      studentName: '劉偉宏'
      },
      {
        sectionId: 5,
        studentId: 95,
        studentName: '黃于軒'
        },
    ]},
    {sectionId: 6, sectionName: '核析組', students:[
      {
        sectionId: 6,
      studentId: 3,
      studentName: '李宗翰'
      },
      {
        sectionId: 6,
        studentId: 94,
        studentName: '林冠宇'
        },
    ]},

  ];

  constructor() { }


  getStudentsBySection(){
    return this.studentsBySection;
  }

  getSections(){
    return this.sections;
  } 

  addStudent(student){
    this.students.push(student);
    const targetSection = _.find(this.studentsBySection, {sectionId:student.sectionId});
    targetSection.students.push(student);
  }

  updateStudent(student, sectionId){
    const targetSection = _.find(this.studentsBySection, {sectionId:student.sectionId});
    const originalSection = _.find(this.studentsBySection, {sectionId:sectionId});
    //console.log('ori', originalSection);
    //console.log('target', targetSection);
    // const unchangeSections = _.filter(this.studentsBySection, (section) => {
    //   console.log(section.sectionId !== originalSection.sectionId);
    //   return section.sectionId !== originalSection.sectionId || targetSection.sectionId;
    // })
    const modOri=_.remove(originalSection.students, (oldStudent)=>{
      //console.log(oldStudent.studentId !== student.studentId);
      return oldStudent.studentId == student.studentId;
    });
    console.log('modOri', modOri);
    targetSection.students.push(student);
  }

  deleteStudent(student){
    const targetSection = _.find(this.studentsBySection, {sectionId:student.sectionId});
    const modTarget=_.remove(targetSection.students, (oldStudent)=>{
      //console.log(oldStudent.studentId !== student.studentId);
      return oldStudent.studentId == student.studentId;
    });
  }
}
