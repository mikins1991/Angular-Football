import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TABS } from '../shared/left-panel.config';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'top5-panel-component',
    templateUrl: './top5-panel.component.html',
    styleUrls: [ './top5-panel.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Top5PanelComponent implements OnInit {
    @Input() templateSelectors: string;
    tabsLiga = TABS;
    constructor(private route: ActivatedRoute) {}

    // clickLiga(title) {
    //   this.tabsLiga.forEach((elem) => {
    //     elem.title === title ? (elem.active = true) : (elem.active = false);
    //   });
    // }

    ngOnInit(): void {}
}
