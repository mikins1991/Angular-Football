import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
    declarations: [ TableComponent ],
    imports: [ CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule ],
    exports: [ TableComponent ],
    providers: [ DatePipe ]
})
export class TableModule {}
