import { Page } from './left-panel.interface';

export const PAGES: Page[] = [
  {
    title: 'Matches',
    icon: 'sports_soccer',
    path: 'matches',
  },
  {
    title: 'Standings',
    icon: 'sort',
    path: 'standings',
  },
  {
    title: 'Statistics',
    icon: 'trending_up',
    path: 'statistics',
  },
];

export const TABS: Page[] = [
  {
    title: 'TOP 5',
    icon: '../../../../assets/img/liga/top-5-png-4.png',
    path: 'top5',
    active: true,
  },
  {
    title: 'Premier league',
    icon: '../../../../assets/img/liga/apl.png',
    path: 'premier-league',
    active: false,
  },
  {
    title: 'LaLiga',
    icon: '../../../../assets/img/liga/la_liga.png',
    path: 'laliga',
    active: false,
  },
  {
    title: 'Serie A',
    icon: '../../../../assets/img/liga/Serie_A.png',
    path: 'serie-a',
    active: false,
  },
  {
    title: 'Bundesliga',
    icon: '../../../../assets/img/liga/bundes.png',
    path: 'bundes-liga',
    active: false,
  },
  {
    title: 'Ligue 1',
    icon: '../../../../assets/img/liga/liga-1.png',
    path: 'ligue1',
    active: false,
  },
];
