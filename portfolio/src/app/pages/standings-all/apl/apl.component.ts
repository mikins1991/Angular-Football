import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TitleButtons, SortButton } from 'src/app/shared/components/constants/liga.const';
import { Standing } from '../standings/interface/standing.interface';

@Component({
    selector: 'apl',
    templateUrl: './apl.component.html',
    styleUrls: [ './apl.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class APLComponent implements OnInit, OnChanges {
    @Input() dataAPL: Standing.DataLiga;

    hide = false;
    sortButton = SortButton;
    sortIndex: { index: number };
    readonly titleButtons: string = TitleButtons;

    constructor() {}

    sortStanding(i: number): void {
        this.sortIndex = { index: i };

        this.sortButton.apl.map((elem, ind) => {
            if (ind === i) {
                elem.active = true;
                return;
            }
            elem.active = false;
        });
    }
    togglePanel(): void {
        this.hide = !this.hide;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dataAPL && changes.dataAPL.currentValue) {
            console.log('APLComponent -> ngOnChanges -> dataAPL', this.dataAPL);
        }
    }
    ngOnInit(): void {}
}
