import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const authRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRouting { }
