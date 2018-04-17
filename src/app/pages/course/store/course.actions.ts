import { Course, PaginatedCourses } from './course.states';

import { Action } from "@ngrx/store";

export const GET_COURSES_BY_PAGE='GetCourseByPage';
export const PAGINATED_COURSES_LOADED_ACTION='PaginatedCoursesLoaded';
export const GET_COURSES_ACTION='GetCourses';
export const COURSES_LOADED_ACTION='CoursesLoaded';

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

//UI
 

export type CourseActions= GetCourseByPageAction |
PaginatedCoursesLoadedAction |
GetCoursesAction |
CoursesLoadedAction
;