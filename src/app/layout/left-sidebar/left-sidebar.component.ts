import { Component, ViewEncapsulation, OnInit, trigger, state, style, transition, animate, ElementRef, HostListener} from '@angular/core';
import {GlobalState} from '../../app.state';

import { ConfigService } from '../../shared/services/config/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftSidebarComponent implements OnInit {
  constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {
  
  }
  ngOnInit() { }


  @HostListener('window:resize')
  public onWindowResize(): void {

  }
}
