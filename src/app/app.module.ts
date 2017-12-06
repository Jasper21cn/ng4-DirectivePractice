import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyCustomDirective} from './my-custom-directive/my-custom-directive';
import {MyBetterCustomDirective} from './my-custom-directive/my-better-custom-directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirective,
    MyBetterCustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
