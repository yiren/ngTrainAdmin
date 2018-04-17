import { Action } from '@ngrx/store';

const NO_ACTION='NoAction';


export class NoAction implements Action{
    readonly type=NO_ACTION;
}


type AppActions= NoAction ;