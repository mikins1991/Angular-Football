import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiFootbalService {
  constructor(private httpClient: HttpClient) {}
  private _urlLiga: string =
    'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
  private _urlClubsLiga: string =
    'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
  getDataLiga(): Observable<any> {
    return this.httpClient.get<any>(this._urlLiga);
  }
  getDataClubLiga(): Observable<any> {
    return this.httpClient.get<any>(this._urlClubsLiga);
  }

  // Token - api.football-data.org
  headers = new HttpHeaders().set(
    'X-Auth-Token',
    '4ad13c810fad400196e31b5eceb47efb'
  );

  // apl standings  http://api.football-data.org/v2/competitions/2021/standings
  getAplTable(): Observable<any> {
    return this.httpClient.get<any>(
      'http://api.football-data.org/v2/competitions/2021/standings',
      { headers: this.headers, observe: 'response' }
    );
  }

  getBligaTable(): Observable<any> {
    return this.httpClient.get<any>(
      'http://api.football-data.org/v2/competitions/2002/standings',
      { headers: this.headers, observe: 'response' }
    );
  }

  // all http://api.football-data.org/v2/competitions/
  getAllCompetitions(): Observable<any> {
    return this.httpClient.get<any>(
      'http://api.football-data.org/v2/competitions',
      { headers: this.headers, observe: 'response' }
    );
  }
}
