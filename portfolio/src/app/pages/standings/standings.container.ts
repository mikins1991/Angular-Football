import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiFootbalService } from 'src/API/api.service';
import { take } from 'rxjs/internal/operators/take';
import { Observable } from 'rxjs';

@Component({
    selector: 'standings',
    template: `<standings-container></standings-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsContainer implements OnInit {
    constructor(private apiService: ApiFootbalService) {}

    ngOnInit(): void {}
}
