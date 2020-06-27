import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsContainer } from './standings.container';
import { ApiFootbalService } from '../../../../API/api.service';
import { TableModule } from '../../../../app/shared/components/table/table.module';
import { ChartsStandingsComponent } from './charts-standings/charts-standings.component';
import { ResultCardModule } from '../../../../app/shared/components/result-card/result-card.module';
import { MatIconModule } from '@angular/material/icon';
import { ChartStandingsV2Component } from './chart-standings-v2/chart-standings-v2.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StandingsComponent } from './standings.component';

@NgModule({
  declarations: [
    StandingsComponent,
    StandingsContainer,
    ChartsStandingsComponent,
    ChartStandingsV2Component,
  ],
  imports: [
    CommonModule,
    TableModule,
    ResultCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [StandingsContainer],
  providers: [ApiFootbalService],
})
export class StandingsModule {}
