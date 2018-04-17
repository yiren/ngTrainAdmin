import { Component, ElementRef, HostBinding, HostListener, OnInit, animate, state, style, transition, trigger } from '@angular/core';

import { AppState } from '../../store/app.states';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AuthState } from '../auth/store/auth.state';
import { ConfigService } from '../../shared/services/config/config.service';
import {GlobalState} from '../../app.state';
import { LogoutAction } from '../auth/store/auth.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  authState$:Observable<AuthState>;
  authState;
  constructor(public config: ConfigService,
              private _elementRef: ElementRef,
              private _state: GlobalState,
              private authService:AuthService,
              private store:Store<AppState>) {

  }

  ngOnInit() {
    this.authState$=this.store.select('auth');
    this.store.select('auth').subscribe(state=>{
      console.log(state);
      this.authState=state;
      console.log(this.authState);
    })
  }
  logout(){
    this.store.dispatch(new LogoutAction());
  }

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }
  
}
