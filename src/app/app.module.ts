import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouting }     from './app.routing';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer.component';

@NgModule({
  declarations: [
    AppComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent]
})
export class AppModule { }
