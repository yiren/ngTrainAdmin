import * as fromAuth from '../pages/auth/store/auth.reducers';

import { ActionReducerMap } from "@ngrx/store";
import { AppState } from './app.states';

export const appReducers:ActionReducerMap<AppState>={
    auth:fromAuth.authReducer
}