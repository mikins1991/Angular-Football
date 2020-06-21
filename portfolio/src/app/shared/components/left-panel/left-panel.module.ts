import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelContainer } from './left-panel.container';
import { LeftPanelComponent } from './left-panel.component';
import { ApiFootbalService } from 'src/API/api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [LeftPanelComponent, LeftPanelContainer],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  exports: [LeftPanelContainer],
  providers: [ApiFootbalService],
})
export class LeftPanelModule {}
