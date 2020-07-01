import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top5PanelContainer } from './top5-panel.container';
import { Top5PanelComponent } from './top5-panel.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../../../../app/app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TableModule } from '../table/table.module';
import { StandingsModule } from '../../../../app/pages/standings-all/standings/standings.module';

@NgModule({
  declarations: [Top5PanelContainer, Top5PanelComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    TableModule,
    StandingsModule,
  ],
  exports: [Top5PanelContainer],
})
export class Top5PanelModule {}
