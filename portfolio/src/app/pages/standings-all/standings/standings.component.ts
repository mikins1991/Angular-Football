import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ApiFootbalService } from 'src/API/api.service';
import { TABS } from 'src/app/shared/components/shared/left-panel.config';
import { Standing } from './interface/standing.interface';
import { SPINNER_CONFIG } from 'src/app/shared/components/shared/spinner-config';
import { LigaNames, HideCadr, SortButton } from 'src/app/shared/components/shared/liga.const';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'standings-container',
    templateUrl: './standings.component.html',
    styleUrls: [ './standings.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsComponent implements OnInit {
    @Input() dataSeriaAIt: Standing.DataLiga;
    @Input() statusLoadingSeriaAIt: boolean;
    @Input() dataBLiga: Standing.DataLiga;
    @Input() dataAPL: Standing.DataLiga;
    @Input() dataFrLiga: Standing.DataLiga;
    @Input() dataPrimeraSpain: Standing.DataLiga;
    @Input() statusLoadingAPL: boolean;
    @Input() statusLoadingBliga: boolean;
    @Input() statusLoadingFrLiga: boolean;
    @Input() statusLoadingPrimeraSpain: boolean;
    sortIndex;

    hide = HideCadr;
    titleButtons = {
        change: 'Change size'
    };
    sortButton = SortButton;
    readonly LigaNames = LigaNames;
    readonly spinerConfig = SPINNER_CONFIG;
    readonly Liga = TABS;

    constructor(private apiService: ApiFootbalService, private crdf: ChangeDetectorRef) {}

    togglePanel(title: string): void {
        switch (title) {
            case LigaNames.apl:
                this.hide.apl = !this.hide.apl;
                return;
            case LigaNames.laLiga:
                this.hide.laLiga = !this.hide.laLiga;
                return;
            case LigaNames.frLiga:
                this.hide.frLiga = !this.hide.frLiga;
                return;
            case LigaNames.bLiga:
                this.hide.bLiga = !this.hide.bLiga;
                return;
            case LigaNames.itLiga:
                this.hide.itLiga = !this.hide.itLiga;
                return;
        }
    }

    sortStanding(title: string, i: number): void {
        this.sortIndex = { title: title, index: i };

        switch (title) {
            case LigaNames.apl:
                this.sortButton.apl.map((elem, ind) => {
                    if (ind === i) {
                        elem.active = true;
                        return;
                    }
                    elem.active = false;
                });

                return;
            case LigaNames.laLiga:
                this.sortButton.laLiga.map((elem, ind) => {
                    if (ind === i) {
                        elem.active = true;
                        return;
                    }
                    elem.active = false;
                });

                return;
            case LigaNames.frLiga:
                this.sortButton.frLiga.map((elem, ind) => {
                    if (ind === i) {
                        elem.active = true;
                        return;
                    }
                    elem.active = false;
                });
                return;
            case LigaNames.bLiga:
                this.sortButton.bLiga.map((elem, ind) => {
                    if (ind === i) {
                        elem.active = true;
                        return;
                    }
                    elem.active = false;
                });
                return;
            case LigaNames.itLiga:
                this.sortButton.itLiga.map((elem, ind) => {
                    if (ind === i) {
                        elem.active = true;
                        return;
                    }
                    elem.active = false;
                });
                return;
        }
    }

    ngOnInit(): void {}
}
