import { Routes, RouterModule } from '@angular/router';
import { StandingsContainer } from './standings.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const StandingsRoutes: Routes = [
    {
        path: 'top5',
        loadChildren: () => import('./standings.module').then((m) => m.StandingsModule)
    }
];

// export const SegmentDuplicationRoutes: Routes = [
// 	{
// 		path: 'segment_duplication',
// 		loadChildren: () => import('./segment-duplication.module').then((m) => m.SegmentDuplicationModule)
// 	}
// ];

const children: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StandingsContainer
    },
    {
        path: 'top5',
        pathMatch: 'full',
        component: StandingsContainer
    }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(children) ]
})
export class StandingsRouterModule {}
