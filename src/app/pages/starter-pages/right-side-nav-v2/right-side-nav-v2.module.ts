import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RightSideNavV2Component } from './right-side-nav-v2.component';
import { RouterModule } from '@angular/router';

const RightSideNavV2_ROUTE = [
    { path: '', component: RightSideNavV2Component },
];

@NgModule({
	  declarations: [RightSideNavV2Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(RightSideNavV2_ROUTE)
    ]
  
})
export class RightSideNavV2Module { }
