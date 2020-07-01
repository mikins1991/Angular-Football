import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-apl',
    template: `<apl>gggg</apl>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class APLContainer implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
