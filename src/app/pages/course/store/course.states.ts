import * as R from 'ramda';
import * as fromApp from "../../../store/app.states";

import { createFeatureSelector, createSelector } from "@ngrx/store";

import { SectionState } from "../../section/store/section.states";

export interface CourseFeatureState extends fromApp.AppState{

    courseDataState: CourseState
    courseUiState:CourseUiState

}

export interface CourseUiState{
    keyword:string;
    pageIndex:number;
    pageSize:number;
}
export const courseUiInitState:CourseUiState={
    keyword:'',
    pageIndex:0,
    pageSize:20
}

export interface CourseState{
    courses:Course[];
    paginatedCourses:PaginatedCourses;
    course:Course;
}

export const courseDataInitState:CourseState={
    courses:[],
    paginatedCourses:null,
    course:null
}

export interface PaginatedCourses{
    recordCount:number,
    courses:Course[]
}

export interface Course{
    courseId: string;
    courseName: string;
    courseStartDate: string;
    courseEndDate: string;
    trainHours: number;
    studentCourses: any[];
  }


  export interface CourseSearch{
    courseName: string;
    courseStartDate: string;
    courseEndDate: string;
  }

  export const selectCourseDataState=createFeatureSelector<CourseState>('courseDataState');
  export const selectCourseById=createSelector(
      selectCourseDataState,
      (courseState)=>{
        if(courseState){
            
            //const course=R.find(R.eqProps('courseId',courseId),courseState.paginatedCourses.courses)
            console.log(courseState.course);
            return courseState.course;
        }else{
            return null;
        }
      }
  )
  export const selectCourseUiSate=createFeatureSelector<CourseFeatureState>('courseUiState')