import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ResultCardComponent],
  exports: [ResultCardComponent],
  imports: [CommonModule, MatIconModule],
})
export class ResultCardModule {}
