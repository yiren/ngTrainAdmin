import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { LeftSideNavV2Component } from './left-side-nav-v2.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const LeftSideNavV2_ROUTE = [
    { path: '', component: LeftSideNavV2Component },
];

@NgModule({
	  declarations: [LeftSideNavV2Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(LeftSideNavV2_ROUTE)
    ]
  
})
export class LeftSideNavV2Module { }
