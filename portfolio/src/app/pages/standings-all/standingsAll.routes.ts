import { Routes } from '@angular/router';

import { StandingsAllComponent } from './standings-all.component';

// const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'top5',
//         pathMatch: 'full',
//         ...StandingsRoutes
//     }
// ];

// export const StandingsAllRoutes: Routes = [ { path: 'standings', children: routes } ];

export const StandingsAllRoutes: Routes = [ { path: 'standings', component: StandingsAllComponent } ];
