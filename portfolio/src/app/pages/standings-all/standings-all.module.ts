import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsAllComponent } from './standings-all.component';

import { StandingsModule } from './standings/standings.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [ StandingsAllComponent ],
    exports: [ StandingsAllComponent ],
    imports: [ CommonModule, MatTabsModule, StandingsModule ]
})
export class StandingsAllModule {}
