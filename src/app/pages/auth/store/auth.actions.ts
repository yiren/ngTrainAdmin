import { Action } from "@ngrx/store";

export const LOGINACTION='LoginAction';
export const LOGOUTACTION='LogoutAction';
export const SET_TOKEN='SetToken';
export const GET_TOKEN='GetToken';

export interface loginCredential{
    username: string;
    password: string;
}

export class LoginAction implements Action{
    readonly type=LOGINACTION;
    constructor(public payload:loginCredential){}
}

export class LogoutAction implements Action{
    readonly type=LOGOUTACTION;
}
export class GetTokenAction implements Action{
    readonly type=GET_TOKEN;
}

export class SetTokenAction implements Action{
    readonly type=SET_TOKEN;
    constructor(public payload:string){}
}

export type AuthActions= LoginAction
| LogoutAction
| GetTokenAction
| SetTokenAction
;