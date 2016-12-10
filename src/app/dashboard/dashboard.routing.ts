import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from '../layout/layout.component';

const dashboardRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting { }
