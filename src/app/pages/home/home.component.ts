import { Component, ElementRef, HostBinding, HostListener, OnInit, animate, state, style, transition, trigger } from '@angular/core';

import { AuthService } from '../../shared/services/auth/auth.service';
import { ConfigService } from '../../shared/services/config/config.service';
import {GlobalState} from '../../app.state';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public config: ConfigService,
              private _elementRef: ElementRef,
              private _state: GlobalState,
              private authService:AuthService) {

  }

  ngOnInit() {

  }
  logout(){
    this.authService.logout();
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
