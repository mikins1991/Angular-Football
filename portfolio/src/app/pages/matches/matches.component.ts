import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'matches-component',
    templateUrl: './matches.component.html',
    styleUrls: [ './matches.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
