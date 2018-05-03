import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "../pages/auth/login/login.component";
import { StudentsDataGuard } from '../pages/student/store/Guards/students.guards';
import { TrainAdminGuard } from '../shared/guard/trainadmin.guard';

const LAYOUT_ROUTES: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", loadChildren: "../pages/home/home.module#HomeModule" },
      { path: "student",canActivateChild:[TrainAdminGuard, StudentsDataGuard], loadChildren: "../pages/student/student.module#StudentModule" },
      { path: "course",canActivateChild:[TrainAdminGuard], loadChildren: "../pages/course/course.module#CourseModule" },
      { path: "section",canActivateChild:[TrainAdminGuard], loadChildren: "../pages/section/section.module#SectionModule" },
      { path: "report", loadChildren: "../pages/report/report.module#ReportModule" },
      { path: "auth", component:LoginComponent
    //  loadChildren: "../pages/auth/auth.module#AuthModule" 
    }
    ]
  },

  // 404 Page Not Found
  { path: "**", redirectTo: "home" }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
