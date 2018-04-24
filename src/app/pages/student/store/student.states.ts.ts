import { AppState } from '../../../store/app.states';
export interface StudentFeatureState extends AppState {
    studentDataState:StudentDataState;
    studnetUiState:StudentUiState;
}

export interface StudentDataState{
    students: Student[];
}

export interface StudentUiState{

}

export interface Student{

}