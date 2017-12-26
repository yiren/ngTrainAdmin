import { AppState, InternalStateType } from "./app.service";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CourseService } from "app/shared/services/course/course.service";
import { FormsModule } from "@angular/forms";
import { GlobalState } from "./app.state";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { LayoutModule } from "./layout/layout.module";
import { NgModule } from "@angular/core";
import { ResponsiveModule } from "ng2-responsive";
import { ServicesModule } from "./shared/services/services.module";
import { SharedModule } from "./shared/shared.module";
import { StudentService } from "app/shared/services/student/student.service";
import { routing } from "./app.routing";

// Application wide providers
const APP_PROVIDERS = [
  AppState, 
  GlobalState,
  StudentService,
  CourseService
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
    SharedModule.forRoot(),
    routing
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appState: AppState) {}
}
