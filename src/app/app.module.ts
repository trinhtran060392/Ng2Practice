import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { AppRouting }     from './app.routing';

import { AppComponent } from './app.component';
import { DocsComponent } from './static/docs.component';
import { FaqComponent } from './static/faq.component';
import { AboutComponent } from './static/about.component';

@NgModule({
  declarations: [
    AppComponent, DocsComponent, FaqComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    LayoutModule,

    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
