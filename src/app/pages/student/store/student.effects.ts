import * as fromStudent from './student.actions';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from '../../section/store/section.states';
import { StudentService } from '../../../shared/services/student/student.service';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class StudentEffects {
    @Effect()
    loadingStudents=this.actions.
        ofType(fromStudent.LOADSTUDENTS).pipe(
            switchMap(()=>this.studentService.getStudentsBySection().pipe(
                map((studentsBySection: Section[])=>new fromStudent.LoadStudentsSuccessAction(studentsBySection)),
                catchError(error=> of(new fromStudent.LoadStudentsFailAction(error)))
            ))
        );
    
    //@Effect()


    constructor(
        private actions:Actions,
        private studentService:StudentService
    ) { }
    
}