import { Action } from '@ngrx/store';
import { Section } from './section.states';

export const GET_ALL_SECTIONS='GetAllSections';
export const SECTIONS_LOADED_ACTION='SectionsLoadedAction';
export class GetAllSections implements Action {
    readonly type=GET_ALL_SECTIONS;
}

export class SectionsLoadedAction implements Action{
    readonly type=SECTIONS_LOADED_ACTION;
    constructor(public payload:Section[]){}
}


export type SectionActions = GetAllSections |
SectionsLoadedAction
;