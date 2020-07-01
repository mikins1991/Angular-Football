import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'statistics',
    template: `<statistics-component></statistics-component>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsContainer implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
