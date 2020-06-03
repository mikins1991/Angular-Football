import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelContainer } from './left-panel.container';
import { LeftPanelComponent } from './left-panel.component';

@NgModule({
  declarations: [LeftPanelComponent, LeftPanelContainer],
  imports: [CommonModule],
  exports: [LeftPanelContainer],
})
export class LeftPanelModule {}
