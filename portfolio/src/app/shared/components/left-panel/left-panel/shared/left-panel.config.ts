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
    tabs: [
      {
        title: 'Segments',
        path: 'segments',
      },
      {
        title: 'Segment Ranker',
        path: 'segment-ranker',
      },
      {
        title: 'Segment Duplication',
        path: 'segment_duplication',
      },
    ],
  },
  {
    title: 'Statistics',
    icon: 'trending_up',
    path: 'buckets',
  },
];
