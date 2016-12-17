import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template.component';
import { LayoutComponent } from '../layout/layout.component';

const templateRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TemplateComponent

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(templateRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateRouting { }
