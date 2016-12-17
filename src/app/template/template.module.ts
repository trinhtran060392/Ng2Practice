import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { LayoutModule } from '../layout/layout.module';
import { TemplateRouting } from './template.routing';

import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    TemplateRouting
  ],
  exports: [ TemplateComponent]
})

export class TemplateModule {}
