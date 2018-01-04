import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from "./layout.component";

const LAYOUT_ROUTES: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", loadChildren: "../pages/home/home.module#HomeModule" },
      { path: "student", loadChildren: "../pages/student/student.module#StudentModule" },
      { path: "course", loadChildren: "../pages/course/course.module#CourseModule" },
      { path: "section", loadChildren: "../pages/section/section.module#SectionModule" }

    ]
  },

  // 404 Page Not Found
  { path: "**", redirectTo: "home" }
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
