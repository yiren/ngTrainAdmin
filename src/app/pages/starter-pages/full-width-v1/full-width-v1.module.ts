import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { FullWidthV1Component } from './full-width-v1.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const FullWidthV1_ROUTE = [
    { path: '', component: FullWidthV1Component },
];

@NgModule({
	  declarations: [FullWidthV1Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(FullWidthV1_ROUTE)
    ]
  
})
export class FullWidthV1Module { }
