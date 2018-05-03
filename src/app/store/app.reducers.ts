import * as _ from 'lodash';
import * as fromApp from './app.actions';
import * as fromAuth from '../pages/auth/store/auth.reducers';
import * as fromSection from '../pages/section/store/section.reducers';
import * as fromStudent from '../pages/student/store/student.reducers';

import { AppDataState, AppState, AppUiState, initAppDataState, initAppUiState } from './app.states';

import { ActionReducerMap } from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';

export const appReducers:ActionReducerMap<AppState>={
    auth:fromAuth.authReducer,
    section:fromSection.sectionReducer,
    appUi:appUiReducer,
    appData:appDataReducer,
    student:fromStudent.studentReducer,
    router:routerReducer
}

export function appDataReducer(state:AppDataState= initAppDataState, action: fromApp.AppActions){
    switch(action.type){

      default:
        return state;
    }
}

export function appUiReducer(state:AppUiState=initAppUiState, action: fromApp.AppActions){
    switch(action.type){

        case (fromApp.SHOW_ERROR_MESSAGE_ACTION):
            return {
                ...state,
                errorMessage:action.payload
            }
        default:
        return state;
    }
}