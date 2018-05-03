import * as R from 'ramda';
import * as fromStudent from './student.actions';

import { Section } from '../../section/store/section.states';
import { Student } from "../model/student";

export interface StudentState{
    entities:{[id:number]:Section};
    loading:boolean;
    loaded:boolean;
}

export const studentInitState:StudentState={
    entities:{},
    loaded:false,
    loading:false
}


export function studentReducer(
    state=studentInitState,
    action:fromStudent.StudnetActions
):StudentState{

    switch(action.type){

        case (fromStudent.LOADSTUDENTSSUCCESS):{
            const studentsBySection = action.payload;
            const entities = //R.reduce((entities:{[id:number]:Student}, students:Student[])=>{
                // .map(student=>{
                //     return {[student.studentId]:student}
                // });
            // },{},students)
                studentsBySection.reduce((entities:{[id:number]:Section},section:Section)=>{
                    return {
                        ...entities,  
                        [section.sectionId]: section
                    }
                },{...state.entities});
            return {
                ...state,
                loaded:true,
                loading:false,
                entities
            };
        }

        case (fromStudent.LOADSTUDENTSFAIL):{
            return {
                ...state,
                loaded:false,
                loading:true
            }
        }

        default:
            return state;
    }
}

export const selectStudentEntities=(state:StudentState)=>state.entities;
export const selectStudentLoading=(state:StudentState)=>state.loading;
export const selectStudentLoaded=(state:StudentState)=>state.loaded;
