import { Action } from "@ngrx/store";
import { Course } from "../../course/store/course.states";
import { SearchUiState } from './search.states';

export const SEARCHBYCOURSENAMEACTION='SearchByCourseName';
export const SEARCHDATALOADEDACTION='SearchDataLoaded';
export const SETSEARCHUISTATEACTION='SetSearchUiState';
export const RESETSEARCHUISTATEACION='ResetSearchUiState';
export const RESETSEARCHDATASTATEACION='ResetSearchUiState';

export class SearchByCourseNameAction implements Action{
    readonly type=SEARCHBYCOURSENAMEACTION;
    constructor(public payload:QueryParams){}
}



export interface QueryParams extends SearchUiState{

}

export class SearchDataLoadedAction implements Action{
    readonly type=SEARCHDATALOADEDACTION;

    constructor(public payload:Course[]){}
}

export class ResetSearchDataAction implements Action{
    readonly type=RESETSEARCHDATASTATEACION
}

export class SetSearchUiAction implements Action{
    readonly type=SETSEARCHUISTATEACTION;
    constructor(public payload:SearchUiState){}
}

export class ResetSearchUiAction implements Action{
    readonly type=RESETSEARCHUISTATEACION;
    
}

export type SearchDataActions= SearchByCourseNameAction |
SearchDataLoadedAction |
ResetSearchDataAction
;

export type SearchUiActions=SetSearchUiAction |
ResetSearchUiAction
;