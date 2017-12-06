import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';


const HOME_ROUTE = [
    { path: '', component: HomeComponent },
];

@NgModule({
	  declarations: [HomeComponent],
    imports: [
			CommonModule,
			SharedModule,
			RouterModule.forChild(HOME_ROUTE)
    ]
  
})
export class HomeModule { }
