import * as fromApp from '../../../store/app.states';
import * as fromStudent from './student.reducers';

import { createSelector } from '@ngrx/store';

export const selectStudentsEntities = createSelector(
    fromApp.selectStudentState,
    (state:fromStudent.StudentState) => state.entities
)

export const selectStudentsLoaded = createSelector(
    fromApp.selectStudentState,
    (state:fromStudent.StudentState) => state.loaded
)

export const selectStudentsLoading = createSelector(
    fromApp.selectStudentState,
    (state:fromStudent.StudentState) => state.loading
)

export const selectAllStudents = createSelector(
    selectStudentsEntities,
    (students=>Object.keys(students).map(studentId=>students[parseInt(studentId,10)]))
)