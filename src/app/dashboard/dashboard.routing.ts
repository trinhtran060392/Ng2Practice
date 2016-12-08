import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../layout/header.component';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../layout/footer.component';

const dashboardRoute: Routes = [
  {
    path: '',
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
