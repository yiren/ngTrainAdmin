import * as fromAuth from '../pages/auth/store/auth.state';
import * as fromSection from '../pages/section/store/section.states';

export interface AppState{
    auth:fromAuth.AuthState;
    section:fromSection.SectionState;
    appUi: AppUiState,
    appData: AppDataState
}

export interface AppUiState{
    errorMessage:{message:string, title:string};
}
export const initAppUiState:AppUiState={
    errorMessage:null
}

export interface AppDataState{
    
}

export const initAppDataState:AppDataState{
    
}