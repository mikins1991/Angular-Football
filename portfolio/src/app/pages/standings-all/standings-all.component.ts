import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiFootbalService } from '../../../API/api.service';
import { take } from 'rxjs/internal/operators/take';
import { Standing } from './standings/interface/standing.interface';
import { TABS } from '../../../app/shared/components/constants/left-panel.config';

@Component({
  selector: 'standings-all',
  templateUrl: './standings-all.component.html',
  styleUrls: ['./standings-all.component.scss'],
})
export class StandingsAllComponent implements OnInit {
  constructor(
    private apiService: ApiFootbalService,
    private crdf: ChangeDetectorRef
  ) {}
  tabsLiga = TABS;
  dataSeriaAIt: Standing.DataLiga;
  statusLoadingSeriaAIt: boolean;
  dataBLiga: Standing.DataLiga;
  dataAPL: Standing.DataLiga;
  dataFrLiga: Standing.DataLiga;
  dataPrimeraSpain: Standing.DataLiga;
  statusLoadingAPL: boolean;
  statusLoadingBliga: boolean;
  statusLoadingFrLiga: boolean;
  statusLoadingPrimeraSpain: boolean;

  getDataBliga(data: Standing.ResponseData): void {
    this.dataBLiga = data.body;
    this.statusLoadingBliga = data.ok;

    this.crdf.detectChanges();
  }

  getDataAPL(data: Standing.ResponseData): void {
    this.dataAPL = data.body;
    this.statusLoadingAPL = data.ok;
    this.crdf.detectChanges();
  }

  getFrLiga(data: Standing.ResponseData): void {
    this.dataFrLiga = data.body;
    this.statusLoadingFrLiga = data.ok;

    this.crdf.detectChanges();
  }

  getPrimeraSpain(data) {
    this.dataPrimeraSpain = data.body;
    this.statusLoadingPrimeraSpain = data.ok;

    this.crdf.detectChanges();
  }
  getSeriaAIt(data: Standing.ResponseData): void {
    this.dataSeriaAIt = data.body;
    this.statusLoadingSeriaAIt = data.ok;

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
      .getPrimeraSpainTable()
      .pipe(take(1))
      .subscribe((data) => {
        this.getPrimeraSpain(data);
      });

    this.apiService
      .getBligaTable()
      .pipe(take(1))
      .subscribe((data) => {
        this.getDataBliga(data);
      });

    this.apiService
      .getFrLiga1Table()
      .pipe(take(1))
      .subscribe((data) => {
        this.getFrLiga(data);
      });
    this.apiService
      .getSeriaAItTable()
      .pipe(take(1))
      .subscribe((data) => {
        this.getSeriaAIt(data);
      });
  }
}
