import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as CourseActions from './course.actions';

import { Actions, Effect } from '@ngrx/effects';
import { Course, PaginatedCourses } from './course.states';

import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CourseEffects {
    API_ENPOINT = '/api/courses';


    @Effect()
    getPaginatedCourses=this.actions$
        .ofType(CourseActions.GET_COURSES_BY_PAGE)
        .switchMap((action:CourseActions.GetCourseByPageAction)=>
        this.httpClient.post(`${this.API_ENPOINT}/getpaginatedcourses`, 
        {pageIndex:action.payload.pageIndex, pageSize:action.payload.pageSize, keyword:action.payload.keyword}))
        .do(console.log)
        .map((courses:PaginatedCourses[])=>{console.log(courses);return new CourseActions.PaginatedCoursesLoadedAction(courses)})
        .catch(err=>Observable.throw(err));

    @Effect()
    getCourses=this.actions$
        .ofType(CourseActions.GET_COURSES_ACTION)
        .switchMap((action:CourseActions.GetCourseByPageAction)=>
            this.httpClient.get(this.API_ENPOINT))
        .do(console.log)
        .map((courses:Course[])=>new CourseActions.CoursesLoadedAction(courses))
        .catch(err=>Observable.throw(err));

    constructor(private actions$:Actions,
        private httpClient: HttpClient) { }
    
}