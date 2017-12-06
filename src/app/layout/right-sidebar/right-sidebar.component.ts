import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

import { ConfigService } from '../../shared/services/config/config.service';



@Component({
    selector: 'app-offsidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.scss'],
		encapsulation: ViewEncapsulation.None,
})
export class RightSidebarComponent implements OnInit {




    constructor(public config: ConfigService) {
      
    }

    ngOnInit() { }





}
