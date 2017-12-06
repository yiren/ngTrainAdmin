import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ConfigService } from '../../../shared/services/config/config.service';
import {GlobalState} from '../../../app.state';
import { MatSidenav } from "@angular/material/sidenav";
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './right-side-nav-v1.component.html',
  styleUrls: ['./right-side-nav-v1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RightSideNavV1Component implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
	@ViewChild('rightSidenav1') rightSidenav1: MatSidenav;
  navMode = 'side';
	isBtnOneActive:boolean = true;
	isBtnTwoActive:boolean = false;
	selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
		this.isBtnOneActive = !this.isBtnOneActive;
		this.isBtnTwoActive = !this.isBtnTwoActive;
  }
	
  constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {

  }

	ngOnInit() {
    if (window.innerWidth < 992) {
      this.navMode = 'over';
			this.rightSidenav1.opened = false;
		
		
    }
		if (window.innerWidth > 992) {
			this.navMode = 'side';
			this.rightSidenav1.open();
		}
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 992) {
            this.navMode = 'over';
						this.rightSidenav1.close();
        }
        if (event.target.innerWidth > 992) {
           this.navMode = 'side';
					 this.rightSidenav1.open();
           
        }
    }

}
