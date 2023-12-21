import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { FnafComponent } from './Pages/fnaf/fnaf.component';
import { SansComponent } from './Components/sans/sans.component';
import { AvatarEditorComponent } from './Pages/avatar-editor/avatar-editor.component';
import { CharacterComponent } from './Components/character/character.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { YoutubevideoComponent } from './Components/youtubevideo/youtubevideo.component';
import { RobloxGameComponent } from './Components/roblox-game/roblox-game.component';
import { CustomLinkComponent } from './Components/custom-link/custom-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundPageComponent,
    FnafComponent,
    SansComponent,
    AvatarEditorComponent,
    CharacterComponent,
    AboutPageComponent,
    YoutubevideoComponent,
    RobloxGameComponent,
    CustomLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
