import { Student } from "../../student/model/student";

export interface SectionFeatureState{
    sectionDataState: SectionState;
}

export interface SectionState{
    sections:Section[];
}

export interface Section{
    sectionName:string;
    sectionCode:string;
    sectionId:number;
    students: Student[]
}

export const sectionInitState:SectionState={
    sections:[]
}
