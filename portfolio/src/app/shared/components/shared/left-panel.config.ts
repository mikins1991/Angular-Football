import { Page } from './left-panel.interface';
import { LigaNames } from './liga.const';

export const PAGES: Page[] = [
    {
        title: 'Matches',
        icon: 'sports_soccer',
        path: 'matches'
    },
    {
        title: 'Standings',
        icon: 'sort',
        path: 'standings'
    },
    {
        title: 'Statistics',
        icon: 'trending_up',
        path: 'statistics'
    }
];

export const TABS: Page[] = [
    {
        title: 'TOP 5',
        icon: '../../../../assets/img/liga/top-5-png-4.png',
        path: 'top5',
        active: true
    },
    {
        title: LigaNames.apl,
        icon: '../../../../assets/img/liga/apl.png',
        path: 'premier-league',
        active: false
    },
    {
        title: LigaNames.laLiga,
        icon: '../../../../assets/img/liga/la_liga.png',
        path: 'laliga',
        active: false
    },
    {
        title: LigaNames.itLiga,
        icon: '../../../../assets/img/liga/Serie_A.png',
        path: 'serie-a',
        active: false
    },
    {
        title: LigaNames.bLiga,
        icon: '../../../../assets/img/liga/bundes.png',
        path: 'bundes-liga',
        active: false
    },
    {
        title: LigaNames.frLiga,
        icon: '../../../../assets/img/liga/liga-1.png',
        path: 'ligue1',
        active: false
    }
];
