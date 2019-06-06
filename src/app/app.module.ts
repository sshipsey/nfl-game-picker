import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TeamComponent } from './team/team.component';
import { XmlService } from './services/xmlService';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ScoreboardTeamComponent } from './scoreboard-team/scoreboard-team.component';
import { WeekFetchService } from './services/weekFetchService';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ScoreboardComponent,
    ScoreboardTeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [XmlService, WeekFetchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
