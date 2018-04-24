
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
}

export const sectionInitState:SectionState={
    sections:[]
}
