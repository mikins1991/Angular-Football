import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesRoutes } from './pages/matches/matches.routes';
import { StandingsAllRoutes } from './pages/standings-all/standingsAll.routes';
import { StatisticsRoutes } from './pages/statistics/statistics.routes';

const routes: Routes = [
    { path: '', redirectTo: 'standings', pathMatch: 'full' },
    ...MatchesRoutes,
    ...StandingsAllRoutes,
    ...StatisticsRoutes,
    { path: '**', redirectTo: 'standings', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
