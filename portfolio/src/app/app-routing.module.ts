import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesRoutes } from './pages/matches/matches.routes';
import { StandingsRoutes } from './pages/standings-all/standings/standings.routes';
import { StandingsAllRoutes } from './pages/standings-all/standingsAll.routes';

const routes: Routes = [
    { path: '', redirectTo: 'standings', pathMatch: 'full' },
    ...MatchesRoutes,
    ...StandingsAllRoutes,
    { path: '**', redirectTo: 'standings', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
