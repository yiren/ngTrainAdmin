import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { FullWidthV2Component } from './full-width-v2.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const FullWidthV2_ROUTE = [
    { path: '', component: FullWidthV2Component },
];

@NgModule({
	  declarations: [FullWidthV2Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(FullWidthV2_ROUTE)
    ]
  
})
export class FullWidthV2Module { }
