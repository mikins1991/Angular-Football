import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { ApiFootbalService } from '../../../API/api.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'matches-component',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchesComponent implements OnInit {
  constructor(private apiService: ApiFootbalService) {}

  data;
  teams;
  // ngOnChanges(changes: import('@angular/core').SimpleChanges): void {}

  onDataLiga(data) {
    this.data = data;
    console.log('LeftPanelComponent -> ngOnInit ->  this.data', this.data);
  }

  onDataClub(data) {
    console.log('MatchesComponent -> onDataClub -> data', data);
  }

  ngOnInit(): void {
    this.apiService
      .getMatchTable()
      .pipe(take(1))
      .subscribe((data) => this.onDataLiga(data));
    this.apiService
      .getDataClubLiga()
      .subscribe((data) => this.onDataClub(data));
    this.apiService
      .getAllCompetitions()
      .pipe(take(1))
      .subscribe((data) =>
        console.log('MatchesComponent -> ngOnInit -> data', data)
      );
  }
}
