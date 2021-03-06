import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routes';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavDropDownDirectives } from '../shared/directives/nav-dropdown.directive';
import { NgModule } from '@angular/core';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { ScrollbarDirective } from "../shared/directives/scrollbar.directive";
import { SearchComponent } from './top-navbar/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
    declarations: [
        LayoutComponent,
        LeftSidebarComponent,
        TopNavbarComponent,
        SearchComponent,
        RightSidebarComponent,
		ScrollbarDirective,
		NavDropDownDirectives
    ],
    imports: [
		LayoutRoutes,
		CommonModule,
		FormsModule,
		SharedModule.forRoot()
    ]
})
export class LayoutModule { }
