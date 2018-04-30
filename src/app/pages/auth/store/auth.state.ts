import { AppState } from "../../../app.service";

export interface AuthState{
    token: string;
    isAuthenticated:boolean;
}

export const authInitialState: AuthState={
    token:null,
    isAuthenticated : false
}