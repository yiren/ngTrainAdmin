import * as fromApp from '../../../store/app.states';
import * as fromStudent from './student.reducers';

import { createSelector } from '@ngrx/store';

export const selectStudentsEntities = createSelector(
    fromApp.selectStudentState,
    fromStudent.getStudentEntities
)

export const selectStudentsLoaded = createSelector(
    fromApp.selectStudentState,
    fromStudent.getStudentLoaded
)

export const selectStudentsLoading = createSelector(
    fromApp.selectStudentState,
    fromStudent.getStudentLoading
)

export const selectAllStudents = createSelector(
    selectStudentsEntities,
    (students=>Object.keys(students).map(studentId=>students[parseInt(studentId,10)]))
)