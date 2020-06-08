import { Page } from './left-panel.interface';

export const PAGES: Page[] = [
  {
    title: 'Matches',
    icon: 'sports_soccer',
    path: 'dashboard',
  },
  {
    title: 'Standings',
    icon: 'sort',
    path: 'target-segments',
  },
  {
    title: 'Statistics',
    icon: 'trending_up',
    path: 'buckets',
  },
];

export const TABS: Page[] = [
  {
    title: 'TOP 5',
    icon: '../../../../assets/img/liga/top-5-png-4.png',
    path: 'top5',
  },
  {
    title: 'Premier league',
    icon: '../../../../assets/img/liga/apl.png',
    path: 'premier-league',
  },
  {
    title: 'LaLiga',
    icon: '../../../../assets/img/liga/la_liga.png',
    path: 'laliga',
  },
  {
    title: 'Serie A',
    icon: '../../../../assets/img/liga/Serie_A.png',
    path: 'serie-a',
  },
  {
    title: 'Bundes Liga',
    icon: '../../../../assets/img/liga/bundes.png',
    path: 'bundes-liga',
  },
  {
    title: 'Ligue 1',
    icon: '../../../../assets/img/liga/liga-1.png',
    path: 'ligue1',
  },
];
