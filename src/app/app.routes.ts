import { Routes } from "@angular/router";
import { privateGuard, publicGuard } from "./core/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    canActivateChild: [publicGuard()],
    path: "auth",
    loadChildren: () => import("./auth/features/auth.routes"),
  },
  {
    canActivateChild: [publicGuard()],
    path: "home",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    canActivateChild: [privateGuard()],
    path: "incidents",
    loadChildren: () => import("./features/incidents/incidents.routes"),

  },
  { path: "**", redirectTo: "/home" },
];
