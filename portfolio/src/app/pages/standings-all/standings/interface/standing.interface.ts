// tslint:disable-next-line: no-namespace
export namespace Standing {
    export interface ResponseData {
        body: any;
        headers: any;
        ok: boolean;
        status: number;
        statusText: string;
        type: number;
        url: string;
    }

    export interface DataLiga {
        competition: CompetitionDataLiga;
        filters: any;
        season: { id: number; startDate: string; endDate: string; currentMatchday: number; winner: null };
        standings: Standings[];
    }

    export interface CompetitionDataLiga {
        area: { id: number; name: string };
        code: string;
        id: number;
        lastUpdated: string;
        name: string;
        plan: string;
    }

    export interface Standings {
        group: null;
        stage: string;
        table: StandingsTable[];
        type: string;
    }

    export interface StandingsTable {
        draw: number;
        goalDifference: number;
        goalsAgainst: number;
        goalsFor: number;
        lost: number;
        name: string;
        playedGames: number;
        points: number;
        position: number;
        team: { id: number; name: string; crestUrl: string };
        won: number;
    }

    export interface Table {
        name: string;
        position: number;
        logo: string;
        points: number;
        draw: number;
        goalDifference: number;
        goalsAgainst: number;
        goalsFor: number;
        lost: number;
        playedGames: number;
    }
}
