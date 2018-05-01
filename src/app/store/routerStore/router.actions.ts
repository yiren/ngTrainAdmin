import { Action } from "@ngrx/store";
import { NavigationExtras } from "@angular/router";

export const ROUTERGO='[Router] Go';
export const ROUTERFOWARD='[Router] Forward';
export const ROUTERBACK='[Router] Back';
export const ROUTECHANGE='[Router] Route Change';

export class RouterGo implements Action {
    readonly type = ROUTERGO;

    constructor(
        public payload: {
            path: any[];
            queryParams?: object;
            extras?: NavigationExtras;
        }
    ) {}
}

export class RouterBack implements Action {
    readonly type = ROUTERBACK;
}

export class RouterForward implements Action {
    readonly type = ROUTERFOWARD;
}

export class RouteChange implements Action {
    readonly type = ROUTECHANGE;
    constructor(public payload: { params: any, path: string }) {}
}

export type RouterActions= RouterGo |
RouterForward |
RouterBack |
RouteChange
;