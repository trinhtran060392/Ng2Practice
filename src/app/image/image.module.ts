import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { LayoutModule } from '../layout/layout.module';
import { ImageRouting } from './image.routing';

import { ImageComponent } from './image.component';


@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    ImageRouting
  ],
  exports: [ ImageComponent]
})

export class ImageModule {}
