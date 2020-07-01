import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatisticsContainer } from './statistics.container';

@NgModule({
    declarations: [ StatisticsComponent, StatisticsContainer ],
    exports: [ StatisticsContainer ],
    imports: [ CommonModule ]
})
export class StatisticsModule {}
