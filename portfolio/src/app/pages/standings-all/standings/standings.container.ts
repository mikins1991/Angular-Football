import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Standing } from './interface/standing.interface';

@Component({
    selector: 'standings',
    template: `<standings-container 
    [dataSeriaAIt]="dataSeriaAIt" 
    [statusLoadingSeriaAIt]="statusLoadingSeriaAIt"
    [dataBLiga]="dataBLiga"
    [dataAPL]="dataAPL"
    [dataFrLiga]="dataFrLiga"
    [dataFrLiga]="dataFrLiga"
    [dataPrimeraSpain]="dataPrimeraSpain"
    [statusLoadingAPL]="statusLoadingAPL"
    [statusLoadingBliga]="statusLoadingBliga"
    [statusLoadingFrLiga]="statusLoadingFrLiga"
    [statusLoadingPrimeraSpain]="statusLoadingPrimeraSpain"
    >
    </standings-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsContainer {
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
}
