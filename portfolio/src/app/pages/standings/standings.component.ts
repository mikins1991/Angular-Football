import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiFootbalService } from 'src/API/api.service';
import { take } from 'rxjs/internal/operators/take';
import { TABS } from 'src/app/shared/components/shared/left-panel.config';
import { Standing } from './interface/standing.interface';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'standings-container',
    templateUrl: './standings.component.html',
    styleUrls: [ './standings.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsComponent implements OnInit {
    dataBLiga: Standing.DataLiga;
    dataAPL: Standing.DataLiga;
    dataFrLiga: Standing.DataLiga;
    dataSeriaAIt: Standing.DataLiga;
    dataPrimeraSpain: Standing.DataLiga;
    hide: boolean;
    readonly Liga = TABS;

    constructor(private apiService: ApiFootbalService, private crdf: ChangeDetectorRef) {}

    togglePanel() {
        this.hide = !this.hide;
    }

    getDataBliga(data) {
        this.dataBLiga = data.body;
        this.crdf.detectChanges();
    }

    getDataAPL(data) {
        this.dataAPL = data.body;
        this.crdf.detectChanges();
    }

    getFrLiga(data) {
        this.dataFrLiga = data.body;
        this.crdf.detectChanges();
    }

    getSeriaAIt(data) {
        this.dataSeriaAIt = data.body;
        this.crdf.detectChanges();
    }

    getPrimeraSpain(data) {
        this.dataPrimeraSpain = data.body;
        this.crdf.detectChanges();
    }

    ngOnInit(): void {
        this.apiService.getAplTable().pipe(take(1)).subscribe((data) => {
            this.getDataAPL(data);
        });

        this.apiService.getPrimeraSpainTable().pipe(take(1)).subscribe((data) => {
            this.getPrimeraSpain(data);
        });

        this.apiService.getBligaTable().pipe(take(1)).subscribe((data) => {
            this.getDataBliga(data);
        });

        this.apiService.getFrLiga1Table().pipe(take(1)).subscribe((data) => {
            this.getFrLiga(data);
        });

        this.apiService.getSeriaAItTable().pipe(take(1)).subscribe((data) => {
            this.getSeriaAIt(data);
        });
    }
}
