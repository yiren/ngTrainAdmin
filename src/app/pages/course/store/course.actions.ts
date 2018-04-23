import { Course, PaginatedCourses } from './course.states';

import { Action } from "@ngrx/store";

export const GET_COURSES_BY_PAGE='GetCourseByPage';
export const PAGINATED_COURSES_LOADED_ACTION='PaginatedCoursesLoaded';
export const GET_COURSES_ACTION='GetCourses';
export const COURSES_LOADED_ACTION='CoursesLoaded';
export const ADD_COURSE_ACTION='AddCourseAction';
export const UPDATE_COURSE_BY_ID_ACTION='UpdateCourseAction';
export const DELETE_COURSE_ACTION='DeleteCourseAction';
export const GET_COURSE_BY_ID_ACTION='GetCourseByIdAction';
export const GET_COURSE_BY_ID_LOADED_ACTION='GetCourseByIdLoadedAction';
export const UPDATE_SCORE_BY_ID_ACTION='UpdateScoreAction';

//Data
export class GetCourseByPageAction implements Action{
    readonly type=GET_COURSES_BY_PAGE;
    constructor(public payload:{pageIndex:number, pageSize:number, keyword:string}){}
}

export class PaginatedCoursesLoadedAction implements Action{
    readonly type=PAGINATED_COURSES_LOADED_ACTION;
    constructor(public payload:PaginatedCourses[]){}
}
export class GetCoursesAction implements Action{
    readonly type=GET_COURSES_ACTION;
}


export class CoursesLoadedAction implements Action{
    readonly type=COURSES_LOADED_ACTION;
    constructor(public payload:Course[]){}
}

export class AddCourseAction implements Action{
    readonly type=ADD_COURSE_ACTION;
    constructor(public payload:Course){}
}

export class UpdateCourseByIdAction implements Action{
    readonly type=UPDATE_COURSE_BY_ID_ACTION;
    constructor(public payload:{courseId:string, course:Course}){}
}

export class GetCourseByIdAction implements Action{
    readonly type=GET_COURSE_BY_ID_ACTION;
    constructor(public payload:string){}
}

export class GetCourseByIdLoadedAction implements Action{
    readonly type=GET_COURSE_BY_ID_LOADED_ACTION;
    constructor(public payload:Course){}
}

export class DeleteCourseAction implements Action{
    readonly type=DELETE_COURSE_ACTION;
    constructor(public payload:string){}
}


export class UpdateScoreByIdAction implements Action{
    readonly type=UPDATE_SCORE_BY_ID_ACTION;
    constructor(public payload:{courseId:string,scores:{[studentId:number]:string}}){}
}

export type CourseDataActions= GetCourseByPageAction |
PaginatedCoursesLoadedAction |
GetCoursesAction | 
CoursesLoadedAction |
AddCourseAction |
UpdateCourseByIdAction |
DeleteCourseAction |
GetCourseByIdAction |
GetCourseByIdLoadedAction |
UpdateScoreByIdAction
;
//UI
export const SET_KEYWORD_ACTION='SetKeywordAction';
export const SET_PAGINATION_PARAMETERS_ACTION='SetPaginationParametersAction';
export class SetKeywordAction  implements Action{
    readonly type=SET_KEYWORD_ACTION;
    constructor(public payload:string){}
}
export class SetPaginationParametersAction implements Action{
    readonly type=SET_PAGINATION_PARAMETERS_ACTION;
    constructor(public payload:{pageIndex:number, pageSize:number}){}
}
export type CourseUiActions= SetKeywordAction |
SetPaginationParametersAction
;