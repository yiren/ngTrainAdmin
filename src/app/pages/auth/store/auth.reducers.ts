import * as fromAuth from './auth.actions';

import { AuthState, initialState } from './auth.state';

export function authReducer(state:AuthState=initialState, action:fromAuth.AuthActions){
    switch(action.type){
        
        case (fromAuth.SET_TOKEN):
            return {
                ...state,
                isAuthenticated:true,
                token:action.payload
            };
        case (fromAuth.LOGOUTACTION):
        return {
            ...state,
            isAuthenticated:false,
            token:null
        };
        
        case (fromAuth.SET_AUTHENTICATED_ACTION):
            return {
                ...state,
                isAuthenticated:true
            };
        


        default:
            return state;
    }
}