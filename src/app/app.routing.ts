import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';

const ROUTES: Routes = [
    
    { path: '', loadChildren: './layout/layout.module#LayoutModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
