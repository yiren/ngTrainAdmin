import * as fromApp from '../../../store/app.actions';
import * as fromSection from './section.actions';

import { Actions, Effect } from '@ngrx/effects';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Section } from './section.states';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SectionEffects {
    SECTION_API_ENDPOINT='/api/sections';

    @Effect()
    getSection=this.actions$
        .ofType(fromSection.GET_ALL_SECTIONS)
        .switchMap(()=>this.httpClient.get<Section[]>(this.SECTION_API_ENDPOINT))
        .do(console.log)
        .map(sections=>new fromSection.SectionsLoadedAction(sections))
       // .catch(err=>Observable.throw(err))
        .catch(()=>of(new fromApp.ShowErrorMessageAction({message:'遠端伺服器無法連線',title:'糟糕!'})));


    constructor(
        private actions$:Actions,
        private toasterService:ToastrService,
        private httpClient: HttpClient) { }
    
}
