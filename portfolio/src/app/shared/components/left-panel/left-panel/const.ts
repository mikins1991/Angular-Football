// constructor(private apiService: ApiFootbalService) {}
// data;
// teams;
// ngOnChanges(changes: import('@angular/core').SimpleChanges): void {}

// onDataLiga(data) {
//   this.data = data;
//   console.log('LeftPanelComponent -> ngOnInit ->  this.data', this.data);
// }

// onDataClub(data) {
//   this.teams = data.teams;
//   console.log('LeftPanelComponent -> onDataClub ->  this.data', this.teams);
// }

// ngOnInit(): void {
//   this.apiService.getDataLiga().subscribe((data) => this.onDataLiga(data));
//   this.apiService
//     .getDataClubLiga()
//     .subscribe((data) => this.onDataClub(data));
// }

// <p>left-panel works!</p>
// <!-- <p *ngFor="let liga of data.leagues">{{ liga.strLeague }}</p> -->
// <div *ngFor="let liga of teams">
//   <p>
//     {{ liga.strTeam }}
//   </p>
//   <img src="{{ liga.strTeamBadge }}" style="width: 2rem;" />
//   <p>{{ liga }}</p>
// </div>
