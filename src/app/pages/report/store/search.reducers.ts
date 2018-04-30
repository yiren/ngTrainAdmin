import * as fromSearch from './search.actions';

import { SearchDataState, SearchUiState, initialSearchDataState, initialSearchUiState } from './search.states';

//Data Reducer

export function searchDataReducer(state:SearchDataState=initialSearchDataState ,action:fromSearch.SearchDataActions){
    switch(action.type){
        case (fromSearch.SEARCHDATALOADEDACTION):
            return {
                state,
                courses:action.payload
            }
        case (fromSearch.RESETSEARCHDATASTATEACION):
            return {
                state,
                courses:initialSearchDataState.courses
            }
        
        default:
        return state;
    }
}

// UI Reducer
export function searchUiReducer(state:SearchUiState=initialSearchUiState, action:fromSearch.SearchUiActions){
    switch(action.type){
        case (fromSearch.SETSEARCHUISTATEACTION) :
            return {
                state,
                courseName:action.payload.courseName,
                courseStartDate:action.payload.courseStartDate,
                courseEndDate:action.payload.courseEndDate
            }
        case (fromSearch.RESETSEARCHUISTATEACION):
            return {
                state,
                courseName:initialSearchUiState.courseName,
                courseStartDate:initialSearchUiState.courseStartDate,
                courseEndDate:initialSearchUiState.courseEndDate
            }
        default:
        return state;
    }
}