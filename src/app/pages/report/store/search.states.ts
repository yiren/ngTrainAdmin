import { Course } from "../../course/store/course.states";

export interface SearchFeatureState{
    searchDataState:SearchDataState;
    searchUiState:SearchUiState;
}




export interface SearchDataState{
    courses:Course[];
}

export const initialSearchDataState:SearchDataState={
    courses:[]
}

export interface SearchUiState{
    courseName:string;
    courseStartDate:string;
    courseEndDate:string;
    queryOption:number;
}

export const initialSearchUiState:SearchUiState={
    courseName:'',
    courseStartDate:null,
    courseEndDate:null,
    queryOption:0
}