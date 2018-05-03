import * as fromApp from '../../../../store/app.states';
import * as fromStudent from '../student.reducers'

import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { LoadStudentsAction } from '../student.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators/filter';
import { of } from 'rxjs/observable/of';
import { selectStudentsLoaded } from "../student.selectors";
import { switchMap } from 'rxjs/operators/switchMap';
import { take } from "rxjs/operator/take";
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class StudentsDataGuard implements CanActivateChild {
    constructor(private store:Store<fromApp.AppState>) { }

    canActivateChild():Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(()=>of(true)),
            catchError(()=>of(false))
        );
    }

    checkStore():Observable<boolean>{
        return this.store.select(selectStudentsLoaded).pipe(
            tap(console.log),
            tap(loaded=>{
                if(!loaded){
                    this.store.dispatch(new LoadStudentsAction())
                }
            }),
            tap(console.log),
            filter(loaded => loaded),
            //take(1),
            //tap(console.log)
        )
    }
}