import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BeatComponent } from './pages/beat/beat.component';
import { MessageComponent } from './pages/message/message.component';
import { NavComponent } from './pages/nav/nav.component';
import { ReasonComponent } from './pages/reason/reason.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { AboutComponent } from './pages/about/about.component';
import { RComponent } from './pages/r/r.component';
import { StarComponent } from './pages/star/star.component';
import { CardComponent } from './pages/card/card.component';
import { HeartBeatComponent } from './pages/heart-beat/heart-beat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeatComponent,
    MessageComponent,
    NavComponent,
    ReasonComponent,
    AboutComponent,
    RComponent,
    StarComponent,
    CardComponent,
    HeartBeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
