import { AddSectionDialogComponent } from 'app/shared/components/add-section-dialog/add-section-dialog.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';
import { SectionEffects } from './store/section.effects';
import { StoreModule } from '@ngrx/store';
import { sectionReducer } from './store/section.reducers';

const SECTION_ROUTE = [
  { path: '', component: SectionComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(SECTION_ROUTE),
    //StoreModule.forFeature('sectionState', sectionReducer),
    //EffectsModule.forFeature([SectionEffects])
  ],
  declarations: [SectionComponent],
  entryComponents:[
    AddSectionDialogComponent
  ]
})
export class SectionModule { }
