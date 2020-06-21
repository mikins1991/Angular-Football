import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableComponent],
})
export class TableModule {}
