import * as fromActions from '../app/pages/student/store/student.actions';
import * as fromApp from '../app/store/app.states';
import * as fromReducers from '../app/pages/student/store/student.reducers';
import * as fromSelectors from '../app/pages/student/store/student.selectors';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { Section } from '../app/pages/section/store/section.states';
import { Student } from '../app/pages/student/model/student';
import { TestBed } from '@angular/core/testing';
import { appReducers } from '../app/store/app.reducers';

describe('Testing Student Selectors',()=>{
    let store:Store<fromApp.AppState>;


    
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

    const entities={
        1:sections[0],
        2:sections[1],
        3:sections[2]
    }

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                StoreModule.forRoot({
                    ...appReducers,
                    students:combineReducers(fromReducers.studentReducer)
                })
            ]
        });

        store=TestBed.get(Store);
        console.log(store);
        spyOn(store,'dispatch').and.callThrough();

    });

    describe('Testing Select StudentEntities',()=>{
        it('Should Return Student Entities',()=>
        {
            let result;

            store
                .select(fromSelectors.selectStudentsEntities)
                .subscribe(value=>{
                    //console.log(value)
                    result=value;
                });
        
            expect(result).toEqual({});

            store
                .dispatch(new fromActions.LoadStudentsSuccessAction(sections));

            expect(result).toEqual(entities);
        })

    });

    describe('Testing Select StudentLoaded',()=>{
        it('loaded to be true',()=>
        {
            let result;
            store
                .select(fromSelectors.selectStudentsLoaded)
                .subscribe(value=>{
                    //console.log(value)
                    result=value;
                });
            store
                .dispatch(new fromActions.LoadStudentsAction());

            expect(result).toEqual(false);

            store
                .dispatch(new fromActions.LoadStudentsSuccessAction(sections));

            expect(result).toEqual(true);
        })

    });

    describe('Testing Select StudentLoading',()=>{
        it('loading to be true',()=>
        {
            let result;

            store
                .select(fromSelectors.selectStudentsLoading)
                .subscribe(value=>{
                    //console.log(value)
                    result=value;
                });
                
            store
                .dispatch(new fromActions.LoadStudentsAction());
            expect(result).toEqual(true);

            store
                .dispatch(new fromActions.LoadStudentsSuccessAction(sections));

            expect(result).toEqual(false);
        })

    });

    


})