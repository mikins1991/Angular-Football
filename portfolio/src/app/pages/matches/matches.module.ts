import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesComponent } from './matches.component';
import { MatchesContainer } from './matches.container';
import { ApiFootbalService } from '../../../API/api.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TableModule } from '../../../app/shared/components/table/table.module';
import { Top5PanelModule } from '../../../app//shared/components/top5-panel/top5-panel.module';

@NgModule({
  declarations: [MatchesComponent, MatchesContainer],
  exports: [MatchesContainer],
  imports: [CommonModule, PerfectScrollbarModule, TableModule, Top5PanelModule],
  providers: [ApiFootbalService],
})
export class MatchesModule {}
