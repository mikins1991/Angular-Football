import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ApiFootbalService } from 'src/API/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { TABS } from 'src/app/shared/components/shared/left-panel.config';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'standings-container',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsComponent implements OnInit {
  dataBLiga;
  dataAPL;
  hide: boolean;
  readonly Liga = TABS;

  constructor(
    private apiService: ApiFootbalService,
    private crdf: ChangeDetectorRef
  ) {}

  togglePanel() {
    this.hide = !this.hide;
  }

  getDataBliga(data) {
    this.dataBLiga = data.body;
    console.log(
      'StandingsComponent -> getData -> this.dataBLiga',
      this.dataBLiga
    );
    this.crdf.detectChanges();
  }

  getDataAPL(data) {
    this.dataAPL = data.body;
    console.log(
      'StandingsComponent -> getData -> this.dataAPL',
      this.dataBLiga
    );
    this.crdf.detectChanges();
  }

  ngOnInit(): void {
    this.apiService
      .getAplTable()
      .pipe(take(1))
      .subscribe((data) => {
        this.getDataAPL(data);
      });

    this.apiService
      .getBligaTable()
      .pipe(take(1))
      .subscribe((data) => {
        this.getDataBliga(data);
      });
  }
}
