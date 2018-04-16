export interface AuthState{
    token: string;
    isAuthenticated;
}

export const initialState: AuthState={
    token:null,
    isAuthenticated : false
}