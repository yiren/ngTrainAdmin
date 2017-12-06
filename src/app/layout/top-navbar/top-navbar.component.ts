import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation, animate, state, style, transition, trigger} from "@angular/core";

import { ConfigService } from "../../shared/services/config/config.service";
import { GlobalState } from "../../app.state";

@Component({
  selector: "app-header",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavbarComponent implements OnInit {


  constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {
    this._state.subscribe('app.isApp_MobileSidebarLeftOpen', (isApp_MobileSidebarLeftOpen) => {
      this.config.appLayout.isApp_MobileSidebarLeftOpen = isApp_MobileSidebarLeftOpen;
    });
    this._state.subscribe('app.isApp_BackdropVisible', (isApp_BackdropVisible) => {
      this.config.appLayout.isApp_BackdropVisible = isApp_BackdropVisible;
    });
    this._state.subscribe('app.isCollapsed', (isCollapsed) => {
      this.config.appLayout.isApp_SidebarLeftCollapsed = isCollapsed;
    });
    this._state.subscribe('app.isApp_SidebarRightOpen', (isApp_SidebarRightOpen) => {
      this.config.appLayout.isApp_SidebarRightOpen = isApp_SidebarRightOpen;
    });
  }

  ngOnInit() {

  }

  toggleAppMobileLeftMenuSidebar() {
    this.config.appLayout.isApp_MobileSidebarLeftOpen = !this.config.appLayout.isApp_MobileSidebarLeftOpen;
				this.config.appLayout.isApp_BackdropVisible = !this.config.appLayout.isApp_BackdropVisible;
				this._state.notifyDataChanged('app.isApp_MobileSidebarLeftOpen', this.config.appLayout.isApp_MobileSidebarLeftOpen);
				this._state.notifyDataChanged('app.isApp_BackdropVisible', this.config.appLayout.isApp_BackdropVisible);
				return false;
  }
  toggleMenuSideabar() {
    this.config.appLayout.isApp_SidebarLeftCollapsed = !this.config.appLayout.isApp_SidebarLeftCollapsed;
    this._state.notifyDataChanged('app.isCollapsed', this.config.appLayout.isApp_SidebarLeftCollapsed);
    return false;
  }

  toggleAppRightSidebar() {
    this.config.appLayout.isApp_SidebarRightOpen = !this.config.appLayout.isApp_SidebarRightOpen;
    this.config.appLayout.isApp_BackdropVisible = !this.config.appLayout.isApp_BackdropVisible;
    this._state.notifyDataChanged('app.isApp_SidebarRightOpen', this.config.appLayout.isApp_SidebarRightOpen);
    this._state.notifyDataChanged('app.isApp_BackdropVisible', this.config.appLayout.isApp_BackdropVisible);
    return false;
  }
}
