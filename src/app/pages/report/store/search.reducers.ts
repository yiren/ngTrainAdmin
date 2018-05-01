import * as fromSearch from './search.actions';

import { SearchDataState, SearchUiState, initialSearchDataState, initialSearchUiState } from './search.states';

//Data Reducer

export function searchDataReducer(state:SearchDataState=initialSearchDataState ,action:fromSearch.SearchDataActions){
    switch(action.type){
        case (fromSearch.SEARCHDATALOADEDACTION):
            return {
                ...state,
                courses:action.payload
            }
        case (fromSearch.RESETSEARCHDATASTATEACION):
            return {
                ...state,
                courses:initialSearchDataState.courses
            }
        case (fromSearch.SEARCHEXPORTDATALOADEDACTION):
            return {
                ...state,
                exportData:action.payload
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
                ...state,
                courseName:action.payload.courseName,
                courseStartDate:action.payload.courseStartDate,
                courseEndDate:action.payload.courseEndDate,
                queryOption:action.payload.queryOption
            }
        case (fromSearch.RESETSEARCHUISTATEACION):
            return {
                ...state,
                courseName:initialSearchUiState.courseName,
                courseStartDate:initialSearchUiState.courseStartDate,
                courseEndDate:initialSearchUiState.courseEndDate,
                queryOption:initialSearchUiState.queryOption
            }
        default:
        return state;
    }
}