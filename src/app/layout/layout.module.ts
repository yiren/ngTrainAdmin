import { AuthEffects } from "../pages/auth/store/auth.effects";
import { CommonModule } from "@angular/common";
import { CommonSharedModule } from '../shared/common.shared.module';
import { EffectsModule } from "@ngrx/effects";
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routes';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { NavDropDownDirectives } from '../shared/directives/nav-dropdown.directive';
import { NgModule } from '@angular/core';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { ScrollbarDirective } from "../shared/directives/scrollbar.directive";
import { SearchComponent } from './top-navbar/search/search.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { authReducer } from "../pages/auth/store/auth.reducers";

@NgModule({
    declarations: [
        LayoutComponent,
        LeftSidebarComponent,
        TopNavbarComponent,
        SearchComponent,
        RightSidebarComponent,
		ScrollbarDirective,
        NavDropDownDirectives,
        LoginComponent
    ],
    imports: [
		LayoutRoutes,
		CommonModule,
		FormsModule,
        CommonSharedModule.forRoot()
        
    ]
})
export class LayoutModule { }
