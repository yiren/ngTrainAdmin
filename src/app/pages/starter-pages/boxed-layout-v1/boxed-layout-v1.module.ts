import { BoxedV1Component } from './boxed-layout-v1.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const BoxedV1_ROUTE = [
    { path: '', component: BoxedV1Component },
];

@NgModule({
	  declarations: [BoxedV1Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(BoxedV1_ROUTE)
    ]
  
})
export class BoxedV1Module { }
