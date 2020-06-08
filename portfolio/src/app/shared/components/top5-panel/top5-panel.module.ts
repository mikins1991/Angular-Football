import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top5PanelContainer } from './top5-panel.container';
import { Top5PanelComponent } from './top5-panel.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [Top5PanelContainer, Top5PanelComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [Top5PanelContainer],
})
export class Top5PanelModule {}
