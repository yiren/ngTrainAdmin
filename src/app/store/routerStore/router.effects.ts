import * as fromApp from '../app.states';

import { Actions, Effect, ofType } from "@ngrx/effects";
import { ActivationEnd, Router } from "@angular/router";
import { RouteChange, RouterGo } from "./router.actions";

import { Injectable } from "@angular/core";
import {Location} from '@angular/common';
import { Store } from "@ngrx/store";
import { filter } from "rxjs/operators/filter";
import { map } from "rxjs/operators/map";
import { switchMap } from "rxjs/operators";
import { tap } from "rxjs/operators/tap";

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private store: Store<fromApp.AppState>
    ) {
        this.listenToRouter();
    }

    @Effect({ dispatch: false })
    navigate$ = this.actions$.pipe(
        ofType('[Router] Go'),
        map((action: RouterGo) => action.payload),
        tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
    );

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$
        .pipe(
            ofType('[Router] Back'), 
            tap(()=>this.location.back())
        );

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.pipe(
        ofType('[Router] Forward'),
        tap(() => this.location.forward())
    );

    private listenToRouter() {
        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd)
        ).subscribe((event: ActivationEnd) =>
            this.store.dispatch(new RouteChange({
                params: { ...event.snapshot.params },
                path: event.snapshot.routeConfig.path
            }))
        );
    }
}