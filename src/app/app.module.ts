import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyCustomDirective} from './my-custom-directive/my-custom-directive';
import {MyBetterCustomDirective} from './my-custom-directive/my-better-custom-directive';
import { MyHoverDirectiveDirective } from './my-custom-directive/my-hover-directive.directive';
import { MyHoverDirective2Directive } from './my-custom-directive/my-hover-directive2.directive';
import { MyCustomStructualDirectiveDirective } from './my-custom-directive/my-custom-structual-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirective,
    MyBetterCustomDirective,
    MyHoverDirectiveDirective,
    MyHoverDirective2Directive,
    MyCustomStructualDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
