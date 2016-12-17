import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageComponent } from './image.component';
import { LayoutComponent } from '../layout/layout.component';

const imageRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ImageComponent

      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(imageRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ImageRouting { }
