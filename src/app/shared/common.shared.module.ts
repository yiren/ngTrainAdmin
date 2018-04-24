import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
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
import { ExcelExportModule } from '@progress/kendo-angular-excel-export/dist/es/excel-export.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../layout/footer/footer.component';
import { GridModule } from '@progress/kendo-angular-grid';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MessageComponent } from './components/message/message.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ResponsiveModule } from 'ng2-responsive';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {ToastrModule} from 'ngx-toastr';
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
    FlexLayoutModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatDividerModule
];

const kendoUI=[
    GridModule,
    ExcelExportModule
];
export const TW_FORMATS = {
    parse: {
      dateInput: 'YYYY/MM/DD'
    },
    display: {
      dateInput: 'YYYY/MM/DD',
      monthYearLabel: 'YYYY MMM',
      dateA11yLabel: 'YYYY/MM/DD',
      monthYearA11yLabel: 'YYYY MMM'
    }
  };


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
        ...matModule
    ],
    declarations: [
		AppBackdropComponent,
		FooterComponent,
		AddSectionDialogComponent,
		MessageComponent
    ],
    providers:[
        {provide: MAT_DATE_FORMATS, useValue: TW_FORMATS},
        {provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
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
        ...kendoUI
    ]
})

export class CommonSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonSharedModule
        };
    }
}
