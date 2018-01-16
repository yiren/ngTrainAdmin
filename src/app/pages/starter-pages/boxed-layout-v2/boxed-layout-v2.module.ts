import { BoxedV2Component } from './boxed-layout-v2.component';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../../shared/common.shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const BoxedV2_ROUTE = [
    { path: '', component: BoxedV2Component },
];

@NgModule({
	  declarations: [BoxedV2Component],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(BoxedV2_ROUTE)
    ]
  
})
export class BoxedV2Module { }
