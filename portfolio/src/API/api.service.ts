import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiFootbalService {
    constructor(private httpClient: HttpClient) {}
    private _urlLiga: string = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    private _urlClubsLiga: string = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German%20Bundesliga';
    //'https: //www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
    //'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';German Bundesliga

    getDataLiga(): Observable<any> {
        return this.httpClient.get<any>(this._urlLiga);
    }
    getDataClubLiga(): Observable<any> {
        return this.httpClient.get<any>(this._urlClubsLiga);
    }

    // Token - api.football-data.org
    private headers = new HttpHeaders().set('X-Auth-Token', '4ad13c810fad400196e31b5eceb47efb');

    // apl real data standings  http://api.football-data.org/v2/competitions/2021/standings
    getAplTable(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/standingsAPL.json', {
            headers: this.headers,
            observe: 'response'
        });
    }

    // spain real data standings http://api.football-data.org/v2/competitions/2014/standings
    getPrimeraSpainTable(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/standingsSpain.json', {
            headers: this.headers,
            observe: 'response'
        });
    }

    // italy real data standings http://api.football-data.org/v2/competitions/2019/standings
    getSeriaAItTable(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/standingsItaly.json', {
            headers: this.headers,
            observe: 'response'
        });
    }

    // Germany real data standings http://api.football-data.org/v2/competitions/2002/standings
    getBligaTable(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/standingsBundes.json', {
            headers: this.headers,
            observe: 'response'
        });
    }

    // Germany real data standings http://api.football-data.org/v2/competitions/2015/standings
    getFrLiga1Table(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/standingsFrance.json', {
            headers: this.headers,
            observe: 'response'
        });
    }

    // http://api.football-data.org/v2/matches
    // all http://api.football-data.org/v2/competitions/
    getAllCompetitions(): Observable<any> {
        return this.httpClient.get<any>('http://api.football-data.org/v2/competitions', {
            headers: this.headers,
            observe: 'response'
        });
    }
    //http://api.football-data.org/v2/matches
    //http://api.football-data.org/v2/competitions/2002/teams
    getMatchTable(): Observable<any> {
        return this.httpClient.get<any>('http://api.football-data.org/v2/competitions/PL/scorers', {
            headers: this.headers,
            observe: 'response'
        });
    }

    //scorers http://api.football-data.org/v2/competitions/PL/scorers
    getScorersTableAPL(): Observable<any> {
        return this.httpClient.get<any>('../assets/data/scorersAPL.json', {
            headers: this.headers,
            observe: 'response'
        });
    }
}
