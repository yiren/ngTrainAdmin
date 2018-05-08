import * as fromActions from '../app/pages/student/store/student.actions';
import * as fromReducers from '../app/pages/student/store/student.reducers';

import { Section } from '../app/pages/section/store/section.states';
import { StudentState } from '../app/pages/student/store/student.reducers';

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

describe('Testing Reducers',()=>{
  describe('undefined Action', ()=>{
      it('should return initialState',()=>{
          const {studentInitState} = fromReducers;
          const action={} as any;

          const result = fromReducers.studentReducer(undefined, action);

          expect(result.entities).toEqual(studentInitState.entities);
          expect(result.loaded).toEqual(studentInitState.loaded);
          expect(result.loading).toEqual(studentInitState.loading);
      });
  });

  describe('Load Student Action', ()=>{
    it('Loading to be true, Loaded to be false',()=>{
        const {studentInitState} = fromReducers;
        const action= new fromActions.LoadStudentsAction();

        const result = fromReducers.studentReducer(studentInitState, action);

        expect(result.entities).toEqual(studentInitState.entities);
        expect(result.loaded).toEqual(false);
        expect(result.loading).toEqual(true);
    });
  });
  
  describe('Student Loaded Success Action', ()=>{
    it('Loaded to be true, loading to be false',()=>{
        const {studentInitState} = fromReducers;
        const action= new fromActions.LoadStudentsSuccessAction(sections);
        const previousState:StudentState={...studentInitState, loading:true}
        const result = fromReducers.studentReducer(previousState, action);

        expect(result.entities).toEqual(entities);
        expect(result.loaded).toEqual(true);
        expect(result.loading).toEqual(false);
    });
  });

  describe('Student Loaded Fail Action', ()=>{
    it('Loaded to be false, loading to be false',()=>{
        const {studentInitState} = fromReducers;
        const action= new fromActions.LoadStudentsFailAction({message:'Error'});
        const previousState:StudentState={...studentInitState};
        const result = fromReducers.studentReducer(previousState, action);

        expect(result.entities).toEqual(previousState.entities);
        expect(result.loaded).toEqual(false);
        expect(result.loading).toEqual(false);
    });
  });
})