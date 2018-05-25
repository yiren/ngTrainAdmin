import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as CourseActions from './course.actions';
import * as fromApp from '../../../store/app.actions';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Course, CourseFeatureState, PaginatedCourses } from './course.states';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { GetCourseByPageAction } from './course.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CourseEffects {
    API_ENPOINT = '/api/courses';


    @Effect()
    getPaginatedCourses=this.actions$
        .ofType(CourseActions.GET_COURSES_BY_PAGE)
        .switchMap((action:CourseActions.GetCourseByPageAction)=>
        this.httpClient.post(`${this.API_ENPOINT}/getpaginatedcourses`, 
        {pageIndex:action.payload.pageIndex, pageSize:action.payload.pageSize, keyword:action.payload.keyword}))
        //.do(console.log)
        .map((courses:PaginatedCourses[])=>{console.log(courses);return new CourseActions.PaginatedCoursesLoadedAction(courses)})
        .catch((err:HttpErrorResponse)=>{
            if(err.status===504){
                return of(new fromApp.ShowErrorMessageAction({message:'遠端伺服器無法連線',title:'糟糕!'}));
            }
        });

    // @Effect()
    // getCourses=this.actions$
    //     .ofType(CourseActions.GET_COURSES_ACTION)
    //     .switchMap((action:CourseActions.GetCourseByPageAction)=>
    //         this.httpClient.get(this.API_ENPOINT))
    //     .do(console.log)
    //     .map((courses:Course[])=>new CourseActions.CoursesLoadedAction(courses))
    //     .catch(err=>Observable.throw(err));


    @Effect()
    getCourseById=this.actions$
        .ofType(CourseActions.GET_COURSE_BY_ID_ACTION)
        .do(console.log)
        .switchMap((action:CourseActions.GetCourseByIdAction)=>
        this.httpClient.get<Course>(`${this.API_ENPOINT}/${action.payload}`))
        .map(course=>new CourseActions.GetCourseByIdLoadedAction(course));

    @Effect()
    updateCoursesWhenPageChanges=this.actions$
        .ofType(CourseActions.SET_PAGINATION_PARAMETERS_ACTION)
        .switchMap(()=>this.store.select('courseUiState'))
        .map(uiState=>new GetCourseByPageAction(uiState));

    @Effect({dispatch:false})
    updateScoreById=this.actions$
        .ofType(CourseActions.UPDATE_SCORE_BY_ID_ACTION)
        .switchMap((action:CourseActions.UpdateScoreByIdAction)=>
        this.httpClient.put(`${this.API_ENPOINT}/${action.payload.courseId}/score`,
        action.payload.scores))
        .map(()=>this.router.navigate(['/course']));

    @Effect({dispatch:false})
    addCourse=this.actions$
        .ofType(CourseActions.ADD_COURSE_ACTION)
        .do(console.log)
        .switchMap((action:CourseActions.AddCourseAction)=>
            this.httpClient.post(this.API_ENPOINT,
                action.payload))
        .map(()=>this.router.navigate(['/course']));


    @Effect({dispatch:false})
    editCourse=this.actions$
        .ofType(CourseActions.UPDATE_COURSE_BY_ID_ACTION)
        .do(console.log)
        .switchMap((action:CourseActions.UpdateCourseByIdAction)=>
            this.httpClient.put(`${this.API_ENPOINT}/${action.payload.courseId}`,
                action.payload.course))
                .map(()=>this.router.navigate(['/course']));
        
    @Effect({dispatch:false})
    deleteCourse=this.actions$
        .ofType(CourseActions.DELETE_COURSE_ACTION)
        .do(console.log)
        .switchMap((action:CourseActions.UpdateCourseByIdAction)=>
            this.httpClient.delete(`${this.API_ENPOINT}/${action.payload.courseId}`))
        .map(()=>this.router.navigate(['/course']));

    constructor(private actions$:Actions,
        private store:Store<CourseFeatureState>,
        private router:Router,
        private httpClient: HttpClient) { }
    
}