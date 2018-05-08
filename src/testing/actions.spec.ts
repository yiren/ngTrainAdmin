import * as fromActions from "app/pages/student/store/student.actions";

import { Section } from '../app/pages/section/store/section.states';

describe('Testing Student Actions',()=>{
   
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

    describe('Testing StudentLoadAction',()=>{
        it('Should Return Correct Action Object',()=>{
            const action=new fromActions.LoadStudentsAction()
            
            expect({...action}).toEqual({
                type:fromActions.LOADSTUDENTS
            })
        })

   }) ;

   describe('Testing StudentLoadFailAction',()=>{
    it('Should Return Correct Action Object',()=>{
        const error={message:'Load Failed'}
        const action=new fromActions.LoadStudentsFailAction(error)
        
        expect({...action}).toEqual({
            type:fromActions.LOADSTUDENTSFAIL,
            payload:error
        })
    })

}) ;


   describe('Testing StudentLoadSuccessAction',()=>{
        it('Should Return Correct Action Object',()=>{
            const action=new fromActions.LoadStudentsSuccessAction(sections)
            
            expect({...action}).toEqual({
                type:fromActions.LOADSTUDENTSSUCCESS,
                payload:sections
            })
        })

   }) ;
});