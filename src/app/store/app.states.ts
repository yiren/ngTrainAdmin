import * as fromAuth from '../pages/auth/store/auth.state';
import * as fromSection from '../pages/section/store/section.states';
import * as fromStudent from '../pages/student/store/student.reducers';

import { MetaReducer, createSelector } from '@ngrx/store';

import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './routerStore/router.state';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
    auth:fromAuth.AuthState;
    section:fromSection.SectionState;
    appUi: AppUiState;
    appData: AppDataState;
    router: RouterReducerState<RouterStateUrl>;
    student: fromStudent.StudentState;
}

export interface AppUiState{
    errorMessage:{message:string, title:string};
}

export interface AppDataState{
    
}

export const initAppUiState:AppUiState={
    errorMessage:null
}

export const initAppDataState:AppDataState={
    
}

export const initAppState:AppState={
    auth:fromAuth.authInitialState,
    section:fromSection.sectionInitState,
    appUi:initAppUiState,
    appData:initAppDataState,
    student:fromStudent.studentInitState,
    router:null
}

export const selectRouter= (state:AppState) => state.router ;

export const selectStudentState = (state:AppState) => state.student;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze]: [];