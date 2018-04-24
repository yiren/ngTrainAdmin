import { Action } from '@ngrx/store';

export const NO_ACTION='NoAction';

export const SHOW_ERROR_MESSAGE_ACTION='ShowErrorMessageAction';

export class NoAction implements Action{
    readonly type=NO_ACTION;
}

export class ShowErrorMessageAction implements Action{
    readonly type=SHOW_ERROR_MESSAGE_ACTION;
    constructor(public payload?:{message:string,title:string}){}
}

export type AppActions= NoAction |
ShowErrorMessageAction;