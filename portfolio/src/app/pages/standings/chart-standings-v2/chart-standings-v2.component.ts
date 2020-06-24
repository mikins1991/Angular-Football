import {
    Component,
    OnInit,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    NgZone,
    SimpleChanges,
    OnChanges,
    OnDestroy
} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { MapDataHelper } from '../helper/map-data-helper';
import { LigaNames } from 'src/app/shared/components/shared/liga.const';

@Component({
    selector: 'chart-standings-v2',
    templateUrl: './chart-standings-v2.component.html',
    styleUrls: [ './chart-standings-v2.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartStandingsV2Component implements OnInit, OnChanges, OnDestroy {
    @Input() data: any;

    @ViewChild('chart', { static: true })
    chartRef: ElementRef;

    colorSeriasMin: string;
    colorSeriasMax: string;
    private chart: am4charts.XYChart;

    constructor(private zone: NgZone) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && changes.data.currentValue) {
            this.createColor(this.data.competition.name);

            const newdata = this.data.standings[0].table.map((element) => {
                element.name = element.team.name;
            });

            const dataChart = MapDataHelper.mapingDataStandings(this.data.standings[0].table);

            this.createChart(dataChart);
        }
    }

    private createColor(nameLiga: string) {
        switch (nameLiga) {
            case LigaNames.frLiga:
                this.colorSeriasMin = '#18B318';
                this.colorSeriasMax = '#FFE500';
                return;
            case LigaNames.bLiga:
                this.colorSeriasMin = '#FFE500';
                this.colorSeriasMax = '#FF0000';
                return;
            case LigaNames.itLiga:
                this.colorSeriasMin = '#FF0000';
                this.colorSeriasMax = '#008FD7';
                return;
        }
    }
    createChart(dataChart) {
        am4core.useTheme(am4themes_dark);
        am4core.useTheme(am4themes_animated);
        this.chart = am4core.create(this.chartRef.nativeElement, am4charts.XYChart);
        this.chart.logo.height = -1500;
        this.chart.hiddenState.properties.opacity = 0;
        this.chart.paddingBottom = 30;

        this.chart.data = dataChart;

        const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());

        categoryAxis.dataFields.category = 'position';
        categoryAxis.adapter.add('getTooltipText', (text, target) => {
            const dataContext: any = { ...target.tooltipDataItem.dataContext };
            return dataContext.name;
        });
        categoryAxis.renderer.labels.template.fill = am4core.color('#ffffff');
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.dy = 35;
        categoryAxis.fontSize = 14;
        categoryAxis.renderer.tooltip.dy = 15;

        const image = new am4core.Image();
        image.horizontalCenter = 'middle';
        image.width = 30;
        image.height = 30;
        image.verticalCenter = 'middle';
        image.adapter.add('href', (href, target) => {
            const dataContext: any = { ...target.dataItem.dataContext };
            return dataContext.logo;
        });

        categoryAxis.dataItems.template.bullet = image;

        const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.minGridDistance = 30;
        valueAxis.renderer.baseGrid.disabled = true;

        const series = this.chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'points';
        series.dataFields.categoryX = 'position';
        series.columns.template.tooltipText = `{name}: {valueY.value} points. Position - {categoryX}`;
        series.columns.template.tooltipY = 1;
        series.columns.template.strokeOpacity = 1;

        series.heatRules.push({
            target: series.columns.template,
            property: 'fill',
            dataField: 'valueY',
            min: am4core.color(this.colorSeriasMin),
            max: am4core.color(this.colorSeriasMax)
        });
    }

    ngOnInit(): void {}

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
