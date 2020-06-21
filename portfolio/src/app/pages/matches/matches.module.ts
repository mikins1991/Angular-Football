import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesComponent } from './matches.component';
import { MatchesContainer } from './matches.container';
import { ResultCardModule } from 'src/app/shared/components/result-card/result-card.module';
import { ApiFootbalService } from 'src/API/api.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [MatchesComponent, MatchesContainer],
  exports: [MatchesContainer],
  imports: [CommonModule, ResultCardModule, PerfectScrollbarModule],
  providers: [ApiFootbalService],
})
export class MatchesModule {}
