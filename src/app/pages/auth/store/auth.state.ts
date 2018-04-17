import { AppState } from "../../../app.service";

export interface AuthState{
    token: string;
    isAuthenticated:boolean;
}

export const initialState: AuthState={
    token:null,
    isAuthenticated : false
}