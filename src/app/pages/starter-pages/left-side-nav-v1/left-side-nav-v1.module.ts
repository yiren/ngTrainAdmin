import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { LeftSideNavV1Component } from './left-side-nav-v1.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

const LeftSideNavV1_ROUTE = [
    { path: '', component: LeftSideNavV1Component },
];

@NgModule({
	  declarations: [LeftSideNavV1Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			TabsModule.forRoot(),
			RouterModule.forChild(LeftSideNavV1_ROUTE)
    ]
  
})
export class LeftSideNavV1Module { }
