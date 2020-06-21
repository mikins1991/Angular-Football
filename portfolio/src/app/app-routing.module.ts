import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesRoutes } from './pages/matches/matches.routes';
import { StandingsRoutes } from './pages/standings/standings.routes';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...MatchesRoutes,
  ...StandingsRoutes,
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
