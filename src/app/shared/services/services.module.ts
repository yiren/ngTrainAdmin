import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ConfigService } from './config/config.service';
import { PreloaderService } from './preloader/preloader.service';
import { SpinnerService } from './spinner/spinner.service';



@NgModule({
    imports: [
	
    ],
    providers: [
        ConfigService,
				PreloaderService,
				SpinnerService
    ],
    declarations: [

    ],
    exports: [

    ]
})
export class ServicesModule {
    constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
    
    }
}
