import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AddSectionDialogComponent } from './components/add-section-dialog/add-section-dialog.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppBackdropComponent } from './components/app_backdrop/app_backdrop.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../layout/footer/footer.component';
import { GridModule } from '@progress/kendo-angular-grid';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ResponsiveModule } from 'ng2-responsive';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

const matModule= [
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule
]

@NgModule({
    imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		ResponsiveModule,
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        ...matModule,

    ],
    declarations: [
		AppBackdropComponent,
		FooterComponent,
		AddSectionDialogComponent,
		
    ],
    exports: [
		CommonModule,
        FormsModule,
		ResponsiveModule,
		AppBackdropComponent,
		FooterComponent,
        ReactiveFormsModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DatepickerModule,
        BsDropdownModule,
        ModalModule,
        PaginationModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TimepickerModule,
        TooltipModule,
        TypeaheadModule,
        ...matModule,
        GridModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
