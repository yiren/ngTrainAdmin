import { AppState } from '../../../store/app.states';
import { Course } from "../../course/store/course.states";
import { createFeatureSelector } from '@ngrx/store';
import { searchDataReducer } from './search.reducers';

export interface SearchFeatureState extends AppState{
    searchDataState:SearchDataState;
    searchUiState:SearchUiState;
}


export interface SearchDataState{
    courses:Course[];
    exportData:Course[];
}

export const initialSearchDataState:SearchDataState={
    courses:[],
    exportData:[]
}

export interface SearchUiState{
    courseName:string;
    courseStartDate:string;
    courseEndDate:string;
    queryOption:number;
    pager:Pager
}

export interface Pager{
    pageIndex:number,
    pageSize:number
}

export const initialSearchUiState:SearchUiState={
    courseName:'',
    courseStartDate:null,
    courseEndDate:null,
    queryOption:0,
    pager:{
        pageIndex:0,
        pageSize:20
    }
}

export const selectSearchData=createFeatureSelector<SearchDataState>('searchDataState');

export const selectSearchByCourseName=select