import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- NgModel lives here
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, // imported to use
    HeroesComponent, 
    HeroDetailComponent, 
    MessagesComponent, 
    DashboardComponent
  ],
  imports: [
    BrowserModule, // export for rendering
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
