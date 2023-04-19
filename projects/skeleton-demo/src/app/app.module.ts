
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkeletonDropDownModule } from 'projects/skeleton-ui/src/lib/drop-down/drop-down.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SkeletonDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
