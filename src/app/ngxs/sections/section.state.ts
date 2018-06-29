import {Action, Actions, Selector, State, StateContext, ofAction} from '@ngxs/store';
import { LoadSections, LoadSectionsSuccessful } from './section.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Section } from './section.model';
import { SectionService } from '../../shared/services/section/section.service';

export class SectionStateModel{
    sections:Section[];
}

@State<SectionStateModel>({
    name:'sections',
    defaults:{
        sections:[]
    }
})
export class SectionState {

    @Selector()
    static getSections(state:SectionStateModel){
        return state.sections;
    }

    constructor(private sectionService:SectionService){}

    @Action(LoadSections)
    LoadSection(actions$:Actions){
        return actions$.pipe(
            ofAction(LoadSections.type),
            switchMap(()=>this.sectionService.getSections()),
            map(sections=> new LoadSectionsSuccessful(sections))
        )
    }

    @Action(LoadSectionsSuccessful)
    LoadSectionsSuccessful(ctx:StateContext<SectionStateModel>, {payload}:LoadSectionsSuccessful){
        ctx.setState({
            sections:payload
        })
    }
   
}