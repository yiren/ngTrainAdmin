import * as CourseActions from './course.actions';

import { Action } from "@ngrx/store";
import { courseInitState } from './course.states';

export function courseDataReducer(state=courseInitState, action: CourseActions.CourseActions){


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

export function courseUiReducer(state, action: CourseActions.CourseActions){
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