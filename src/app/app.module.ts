import * as moment from 'moment';

import { AppState, InternalStateType } from "./app.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { MetaReducer, StoreModule, compose } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AuthEffects } from './pages/auth/store/auth.effects';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AuthRefreshTokenInterceptor } from './shared/interceptor/auth.refresh.interceptor';
import { AuthService } from './shared/services/auth/auth.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonSharedModule } from "./shared/common.shared.module";
import { CourseService } from "app/shared/services/course/course.service";
import { CustomSerializer } from './store/route.state';
import { DebugInterceptor } from './shared/interceptor/debug.Interceptor';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from "@angular/forms";
import { GlobalState } from "./app.state";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { LayoutModule } from "./layout/layout.module";
import { NgModule } from "@angular/core";
import { ReportService } from './shared/services/report/report.service';
import { ResponsiveModule } from "ng2-responsive";
import { SectionEffects } from './pages/section/store/section.effects';
import { SectionService } from './shared/services/section/section.service';
import { ServicesModule } from "./shared/services/services.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StudentService } from "./shared/services/student/student.service";
import { TrainAdminGuard } from './shared/guard/trainadmin.guard';
import { appReducers } from './store/app.reducers';
import { authReducer } from './pages/auth/store/auth.reducers';
import { environment } from '../environments/environment';
import { metaReducers } from './store/app.states';
import { routing } from "./app.routing";
import {storeFreeze} from 'ngrx-store-freeze';

// Application wide providers
const APP_PROVIDERS = [
  AppState, 
  GlobalState,
  StudentService,
  CourseService,
  SectionService,
  ReportService,
  AuthService,
  TrainAdminGuard
];

export type StoreType = {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
};




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    ResponsiveModule,
    CommonSharedModule.forRoot(),
    routing,
    ToastrModule.forRoot({
      timeOut:3500,
      positionClass:'toast-top-center',
      progressBar:true
    }),
    ToastContainerModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(appReducers
       ,{metaReducers}
    ),
        EffectsModule.forRoot([AuthEffects, SectionEffects]),
        StoreDevtoolsModule.instrument()
    
  ],
  providers: [APP_PROVIDERS,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    {provide:HTTP_INTERCEPTORS, useClass:DebugInterceptor, multi:true}
    // ,{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass:AuthRefreshTokenInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appState: AppState) {}
}
