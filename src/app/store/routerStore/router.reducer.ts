import * as fromRouter from './router.actions';

import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

export function routerReducer(state:RouterReducerState<RouterStateUrl>, action:fromRouter.RouterActions){
    switch(action.type){
        
        default:
            return state;
    }
}