import * as SearchActions from './search.actions';

import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Course } from '../../course/store/course.states';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class SearchEffects {
    API_ENDPOINT='/api/searchdata';
    @Effect()
    searchByCourseRequest=this.actions
        .ofType(SearchActions.SEARCHBYCOURSENAMEACTION)
        .switchMap((action:SearchActions.SearchByCourseNameAction)=>{
            let searchParams=new HttpParams();
            Object.keys(action.payload).forEach(key =>{
                searchParams = searchParams.append(key, action.payload[key]);
            });
            return this.httpClient.get(`${this.API_ENDPOINT}/searchbycourse`,{
                                params:searchParams
                            })
        })
        .do(console.log)
        .map((courses:Course[])=>new SearchActions.SearchDataLoadedAction(courses))
    
    @Effect()
    setSearchUi=this.actions
        .ofType(SearchActions.SETSEARCHUISTATEACTION)
        .map((action:SearchActions.SetSearchUiAction)=>new SearchActions.SearchByCourseNameAction(action.payload))

    @Effect({dispatch:false})
    ResetSearchDataState=this.actions
        .ofType(SearchActions.RESETSEARCHUISTATEACION)
        .map(()=>new SearchActions.ResetSearchDataAction())
    constructor(private httpClient: HttpClient,
                private actions: Actions) { }
    
}