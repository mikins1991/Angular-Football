import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelModule } from './shared/components/left-panel/left-panel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { Top5PanelModule } from './shared/components/top5-panel/top5-panel.module';
import { MatchesModule } from './pages/matches/matches.module';
import { HttpClientModule } from '@angular/common/http';
import { StandingsAllModule } from './pages/standings-all/standings-all.module';
import { StatisticsModule } from './pages/statistics/statistics.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        LeftPanelModule,
        BrowserAnimationsModule,
        MatIconModule,
        Top5PanelModule,
        MatchesModule,
        StandingsAllModule,
        StatisticsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
