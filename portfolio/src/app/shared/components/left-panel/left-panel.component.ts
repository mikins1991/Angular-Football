import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PAGES } from '../constants/left-panel.config';

@Component({
    selector: 'left-panel-component',
    templateUrl: './left-panel.component.html',
    styleUrls: [ './left-panel.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent implements OnInit {
    @Input() hide: boolean;
    constructor() {}

    readonly pages = PAGES;

    ngOnInit(): void {}
}
