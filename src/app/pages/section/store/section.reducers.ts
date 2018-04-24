import * as fromSection from './section.actions';

import { SectionState, sectionInitState } from './section.states';

export function sectionReducer(state: SectionState=sectionInitState, action:fromSection.SectionActions){
    switch (action.type) {
        case (fromSection.SECTIONS_LOADED_ACTION):
            return {
                ...state,
                sections:action.payload
            };
        default:
         return state;
    }
}