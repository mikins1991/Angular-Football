import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Standing } from './interface/standing.interface';
import { HideCadr, SortButton, LigaNames } from 'src/app/shared/components/constants/liga.const';
import { SPINNER_CONFIG } from 'src/app/shared/components/constants/spinner-config';
import { TABS } from 'src/app/shared/components/constants/left-panel.config';

@Component({
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

    sortIndex: { title: string; index: number };
    hide = HideCadr;
    titleButtons: string = 'Change size';
    sortButton = SortButton;
    readonly LigaNames = LigaNames;
    readonly spinerConfig = SPINNER_CONFIG;
    readonly Liga = TABS;

    constructor() {}

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
