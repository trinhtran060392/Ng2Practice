import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { LayoutModule } from './layout/layout.module';

import { AppRouting }     from './app.routing';

import { AppComponent } from './app.component';
import { DocsComponent } from './static/docs.component';
import { FaqComponent } from './static/faq.component';
import { AboutComponent } from './static/about.component';
import { PageNotFoundComponent } from './static/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent, DocsComponent, FaqComponent, AboutComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    LayoutModule,

    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
