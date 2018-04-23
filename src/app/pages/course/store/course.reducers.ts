import * as CourseActions from './course.actions';

import { courseDataInitState, courseUiInitState } from './course.states';

import { Action } from "@ngrx/store";

export function courseDataReducer(state=courseDataInitState, action: CourseActions.CourseDataActions){


    switch (action.type) {
        
        case (CourseActions.COURSES_LOADED_ACTION):
            return {
                ...state,
                courses:action.payload
            };

        case (CourseActions.PAGINATED_COURSES_LOADED_ACTION):
            return {
                ...state,
                paginatedCourses:action.payload
            };
        
    
        default:
            return state;
    }
}

export function courseUiReducer(state=courseUiInitState, action: CourseActions.CourseUiActions){
    switch (action.type) {
        case (CourseActions.SET_KEYWORD_ACTION):
            return {
                ...state,
                keyword:action.payload
            }
        case (CourseActions.SET_PAGINATION_PARAMETERS_ACTION):
        return {
            ...state,
            pageIndex:action.payload.pageIndex,
            pageSize:action.payload.pageSize
        }
    
        default:
            return state;
    }
}