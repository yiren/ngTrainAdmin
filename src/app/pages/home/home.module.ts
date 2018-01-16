import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../../shared/common.shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const HOME_ROUTE = [
    { path: '', component: HomeComponent },
];

@NgModule({
	  declarations: [HomeComponent],
    imports: [
			CommonModule,
			CommonSharedModule,
			RouterModule.forChild(HOME_ROUTE)
    ]
  
})
export class HomeModule { }
