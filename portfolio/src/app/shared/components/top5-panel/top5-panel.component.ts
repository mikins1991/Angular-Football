import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TABS } from '../constants/left-panel.config';

@Component({
    selector: 'top5-panel-component',
    templateUrl: './top5-panel.component.html',
    styleUrls: [ './top5-panel.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Top5PanelComponent implements OnInit {
    @Input() templateSelectors: string;
    readonly tabsLiga = TABS;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {}
}
