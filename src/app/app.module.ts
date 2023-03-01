import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/* ---------------------------- LazyLoadOnScroll ---------------------------- */
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IndexpageComponent } from './indexpage/indexpage.component';

@NgModule({
  declarations: [AppComponent, IndexpageComponent],
  imports: [BrowserModule, ScrollingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
