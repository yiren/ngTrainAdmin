import { AppState } from "../../../store/app.states";
import { SectionState } from "../../section/store/section.states";

export interface CourseFeatureState extends AppState{

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
