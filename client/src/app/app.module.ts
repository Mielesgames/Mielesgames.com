import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { FnafComponent } from './Pages/fnaf/fnaf.component';
import { SansComponent } from './Components/sans/sans.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundPageComponent,
    FnafComponent,
    SansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
