import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- NgModel lives here
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent, // imported to use
    HeroesComponent, 
    HeroDetailComponent, 
    MessagesComponent, 
    DashboardComponent, 
    HeroSearchComponent
  ],
  imports: [
    BrowserModule, // export for rendering
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [ HeroService, MessageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
