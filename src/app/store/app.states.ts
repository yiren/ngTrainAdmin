import * as fromAuth from '../pages/auth/store/auth.state'

export interface AppState{
    auth:fromAuth.AuthState;
}