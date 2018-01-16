import { AddSectionDialogComponent } from 'app/shared/components/add-section-dialog/add-section-dialog.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';

const SECTION_ROUTE = [
  { path: '', component: SectionComponent },
];

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    RouterModule.forChild(SECTION_ROUTE)
  ],
  declarations: [SectionComponent],
  entryComponents:[
    AddSectionDialogComponent
  ]
})
export class SectionModule { }
