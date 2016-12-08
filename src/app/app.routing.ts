import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
