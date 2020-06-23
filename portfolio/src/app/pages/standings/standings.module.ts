import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings.component';
import { StandingsContainer } from './standings.container';
import { ApiFootbalService } from 'src/API/api.service';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ChartsStandingsComponent } from './charts-standings/charts-standings.component';
import { ResultCardModule } from 'src/app/shared/components/result-card/result-card.module';
import { MatIconModule } from '@angular/material/icon';
import { ChartStandingsV2Component } from './chart-standings-v2/chart-standings-v2.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ StandingsComponent, StandingsContainer, ChartsStandingsComponent, ChartStandingsV2Component ],
    imports: [ CommonModule, TableModule, ResultCardModule, MatIconModule, MatProgressSpinnerModule ],
    exports: [ StandingsContainer ],
    providers: [ ApiFootbalService ]
})
export class StandingsModule {}
