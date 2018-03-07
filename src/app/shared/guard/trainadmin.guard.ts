import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainAdminGuard implements CanActivateChild {
    constructor(private authService:AuthService,
                private router:Router) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService.isLoggedIn()){
            return true;
        }else{
            this.router.navigate(['/auth']);
            return false;
        }
        
    }
}