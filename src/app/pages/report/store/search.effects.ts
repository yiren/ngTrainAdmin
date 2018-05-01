import * as SearchActions from './search.actions';

import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchFeatureState, SearchUiState } from './search.states';

import { Course } from '../../course/store/course.states';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class SearchEffects {
    API_ENDPOINT='/api/searchdata';
    
    @Effect()
    searchByCourseRequest=this.actions
        .ofType(SearchActions.SEARCHBYCOURSENAMEACTION)
        .map(this.MapToHttpParams)
        // .withLatestFrom(this.store.select('searchUiState'))
        // .map(uiState=>uiState[1])
        // .switchMap(searchParams => forkJoin(
        //     this.httpClient.get(`${this.API_ENDPOINT}/searchbycourse`,{params:searchParams}),
        //     this.httpClient.get(`${this.API_ENDPOINT}/searchbysection`,{params:searchParams})
        // )
        // )
        .switchMap(searchParams=>this.httpClient.get(`${this.API_ENDPOINT}/searchbycourse`,{params:searchParams}))
        .map(
            //console.log
            
            //  (courses:Course[], excelCourses:Course[])=>
            //  (new SearchActions.SearchDataLoadedAction(courses),
            //  new SearchActions.SearchExportDataLoadedAction(excelCourses))
             (courses:Course[])=>
                
                //const courses:Course[]=data[0]; 
                //const execelCourses:Course[]=data[1];
                new SearchActions.SearchDataLoadedAction(courses)
        )
             
    
    @Effect()
    getExportData=this.actions
        .ofType(SearchActions.GETSEARCHEXPORTDATAACTION)
        .map(this.MapToHttpParams)
        .switchMap(searchParams=>this.httpClient.get(`${this.API_ENDPOINT}/searchbysection`,{params:searchParams}))
        .map((courses:Course[]) => new SearchActions.SearchExportDataLoadedAction(courses))
    
    @Effect()
    setSearchUi=this.actions
        .ofType(SearchActions.SETSEARCHUISTATEACTION)
        .switchMap((action:SearchActions.SetSearchUiAction)=>
        [new SearchActions.SearchByCourseNameAction(action.payload), new SearchActions.GetSearchExportDataAction(action.payload)]
    )
    
    @Effect({dispatch:false})
    ResetSearchDataState=this.actions
        .ofType(SearchActions.RESETSEARCHUISTATEACION)
        .map(()=>new SearchActions.ResetSearchDataAction())

    constructor(private httpClient: HttpClient,
                private store:Store<SearchFeatureState>,
                private actions: Actions) { }
    
    MapToHttpParams(action:SearchActions.SearchByCourseNameAction) {
        let searchParams=new HttpParams();
        Object.keys(action.payload).forEach(key =>{
            searchParams = searchParams.append(key, action.payload[key]);
        });
        return searchParams;
    }
}
