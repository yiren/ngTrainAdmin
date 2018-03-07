import { Component, ElementRef, HostListener, OnInit, ViewEncapsulation, animate, state, style, transition, trigger } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';
import { ConfigService } from '../../shared/services/config/config.service';
import {GlobalState} from '../../app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftSidebarComponent implements OnInit {
  constructor(public config: ConfigService,
     private _elementRef: ElementRef,
     private _state: GlobalState,
     private authService:AuthService) {
  
  }
  ngOnInit() { }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  @HostListener('window:resize')
  public onWindowResize(): void {

  }
}
