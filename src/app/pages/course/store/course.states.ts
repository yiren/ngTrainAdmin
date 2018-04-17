import { AppState } from "../../../store/app.states";

export interface CourseFeatureState extends AppState{

    courseDataState: CourseState
    courseUiState:CourseUiState

}

export interface CourseUiState{
    keyword:string;
    pageIndex:number;
    pageSize:number;
}

export interface CourseState{
    courses:Course[];
    paginatedCourses:PaginatedCourses;
}

export const courseInitState:CourseState={
    courses:[],
    paginatedCourses:null
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