import { Action } from "@ngrx/store";
import { Section } from "../../section/store/section.states";
import { Student } from "../model/student";

export const LOADSTUDENTS = '[Students] Load Student';
export const LOADSTUDENTSSUCCESS = '[Students] Load Student Success';
export const LOADSTUDENTSFAIL = '[Students] Load Student Fail';

export class LoadStudentsAction implements Action{
    readonly type= LOADSTUDENTS;
}

export class LoadStudentsSuccessAction implements Action{
    readonly type= LOADSTUDENTSSUCCESS;
    constructor(public payload: Section[]){}
}

export class LoadStudentsFailAction implements Action{
    readonly type= LOADSTUDENTSFAIL;
    constructor(public payload:any){}
}


export type StudnetActions = LoadStudentsAction |
LoadStudentsSuccessAction |
LoadStudentsFailAction 
;