import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Standing } from '../standings/interface/standing.interface';
import { ApiFootbalService } from 'src/API/api.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
    selector: 'apl',
    template: `<apl-component
    [dataAPL]="dataAPL"
    ></apl-component>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class APLContainer implements OnInit {
    @Input() dataAPL: Standing.DataLiga;

    constructor(private apiService: ApiFootbalService) {}

    getScorersAPL(data) {}
    ngOnInit(): void {
        this.apiService.getScorersTableAPL().pipe(take(1)).subscribe((data) => {
            this.getScorersAPL(data);
        });
    }
}
