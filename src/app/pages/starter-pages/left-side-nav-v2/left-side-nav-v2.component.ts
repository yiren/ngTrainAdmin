import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ConfigService } from '../../../shared/services/config/config.service';
import {GlobalState} from '../../../app.state';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './left-side-nav-v2.component.html',
  styleUrls: ['./left-side-nav-v2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LeftSideNavV2Component implements OnInit {

	@ViewChild('leftSidenav2') leftSidenav2: MatSidenav;
  navMode = 'side';

  constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {

  }

	ngOnInit() {
    if (window.innerWidth < 992) {
      this.navMode = 'over';
			this.leftSidenav2.opened = false;
		
		
    }
		if (window.innerWidth > 992) {
			this.navMode = 'side';
			this.leftSidenav2.open();
		}
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 992) {
            this.navMode = 'over';
						this.leftSidenav2.close();
        }
        if (event.target.innerWidth > 992) {
           this.navMode = 'side';
					 this.leftSidenav2.open();
           
        }
    }

}
