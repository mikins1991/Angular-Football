import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APLComponent } from '../apl/apl.component';
import { APLContainer } from './apl.container';
import { TableModule } from '../../../../app/shared/components/table/table.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [APLComponent, APLContainer],
  exports: [APLComponent, APLContainer],
  imports: [CommonModule, TableModule, MatIconModule],
})
export class APLModule {}
