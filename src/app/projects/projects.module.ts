import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../layout/layout.module';
import { ProjectsRouting } from './projects.routing';

import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LayoutModule,
    ProjectsRouting
  ],
  exports: [ ProjectsComponent]
})

export class ProjectsModule {}
