import * as fromActions from '../app/pages/student/store/student.actions';
import * as fromEffects from 'app/pages/student/store/student.effects';

import {cold, hot} from 'jasmine-marbles';

import { Actions } from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { Section } from '../app/pages/section/store/section.states';
import { StudentService } from '../app/shared/services/student/student.service';
import { TestBed } from '@angular/core/testing';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import {provideMockActions} from '@ngrx/effects/testing';

export class TestActions extends Actions {
    constructor(){
        super(empty());
    }

    set stream(source:Observable<any>){
        this.source=source;
    }    
}

export function getActions(){
    return new TestActions();
}

const sections:Section[]=[
    {
        sectionId:1,
        sectionCode:'A',
        sectionName:'策劃組',
        students:[]
    },
    {
        sectionId:2,
        sectionCode:'B',
        sectionName:'PE II',
        students:[]
    },
    {
        sectionId:3,
        sectionCode:'C',
        sectionName:'土木組',
        students:[]
    }
]

describe('Testing Effects', ()=>{
    let actions$: Observable<any>;
    let service: StudentService;
    let effects: fromEffects.StudentEffects;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                fromEffects.StudentEffects,
                StudentService,
                provideMockActions(() => actions$),
            ]
        });

        effects = TestBed.get(fromEffects.StudentEffects);
        service = TestBed.get(StudentService);

        spyOn(service, 'getStudentsBySection').and.returnValue(of(sections));
    });

    describe('Testing load student effect',()=>{
        it('should return a collection from LoadStudentSuccess', () => {
            const action=new fromActions.LoadStudentsAction();
            const completedAction= new fromActions.LoadStudentsSuccessAction(sections);

            actions$=hot('^-a', {a:action});
            const expected = cold('--b', {b:completedAction});

            expect(effects.loadingStudents).toBeObservable(expected);
        });
    });
});