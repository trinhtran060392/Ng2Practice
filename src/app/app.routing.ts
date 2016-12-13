import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DocsComponent } from './static/docs.component';
import { FaqComponent } from './static/faq.component';
import { AboutComponent } from './static/about.component';
import { PageNotFoundComponent } from './static/pagenotfound.component';

const routes: Routes = [
  { path: '', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'docs', component: LayoutComponent, children: [
    {
      path: '',
      component: DocsComponent
    }
  ]},
  { path: 'faq', component: LayoutComponent, children: [
    {
      path: '',
      component: FaqComponent
    }
  ]},
  { path: 'about', component: LayoutComponent, children: [
    {
      path: '',
      component: AboutComponent
    }
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}
