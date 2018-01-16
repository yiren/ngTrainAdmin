import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RightSideNavV1Component } from './right-side-nav-v1.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

const RightSideNavV1_ROUTE = [
    { path: '', component: RightSideNavV1Component },
];

@NgModule({
	  declarations: [RightSideNavV1Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			TabsModule.forRoot(),
			RouterModule.forChild(RightSideNavV1_ROUTE)
    ]
  
})
export class RightSideNavV1Module { }
