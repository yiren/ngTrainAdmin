import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { AppState } from './store/app.states';
import { ConfigService } from "./shared/services/config/config.service";
import { GlobalState } from "./app.state";
import { PreloaderService } from "./shared/services/preloader/preloader.service";
import { SpinnerService } from "./shared/services/spinner/spinner.service";
import { Store } from '@ngrx/store';
import { ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: "app-root",
  template: `
  
  <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  //App Left Sidebar Menu Open/Close Desktop
  @HostBinding("class.app_sidebar-menu-collapsed")
  get isApp_SidebarLeftCollapsed() {
    return this.config.appLayout.isApp_SidebarLeftCollapsed;
  }
  //Left Menu Sidebar Open/Close Tablet & Mobile
  @HostBinding("class.app_sidebar-left-open")
  get isApp_MobileSidebarLeftOpen() {
    return this.config.appLayout.isApp_MobileSidebarLeftOpen;
  }
  //App Right Sidebar Open/Close
  @HostBinding("class.sidebar-overlay-open")
  get isApp_SidebarRightOpen() {
    return this.config.appLayout.isApp_SidebarRightOpen;
  }

  

  constructor(
    private _state: GlobalState,
    public config: ConfigService,
    private viewContainerRef: ViewContainerRef,
    private _spinner: SpinnerService,
    private toasterService:ToastrService,
    private store:Store<AppState>
  ) {}

  ngOnInit() {
    $(document).on("click", '[href="#"]', e => e.preventDefault());
    //this.toasterService.overlayContainer=this.toasterContainer;
    this.store.select('appUi').subscribe(uiState=>{
      console.log(uiState.errorMessage)
      if(uiState.errorMessage)
      this.toasterService.error(uiState.errorMessage.message, uiState.errorMessage.title);
    })
  }
  //check if menu should reset on resize
  @HostListener("window:resize")
  public onWindowResize(): void {
    if (this._shouldMenuReset()) {
      this.config.appLayout.isApp_SidebarLeftCollapsed = false;
    }
  }

  private _shouldMenuReset(): boolean {
    return window.innerWidth <= this.config.breakpoint.desktopLG;
  }

  public ngAfterViewInit(): void {
    PreloaderService.load().then(values => {
      this._spinner.hide();
    });
  }
}
