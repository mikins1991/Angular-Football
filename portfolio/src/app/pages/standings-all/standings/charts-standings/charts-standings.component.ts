import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
    OnChanges,
    SimpleChanges,
    AfterViewInit
} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { MapDataHelper } from '../helper/map-data-helper';
import { LigaNames } from 'src/app/shared/components/constants/liga.const';

@Component({
    selector: 'charts-standings',
    templateUrl: './charts-standings.component.html',
    styleUrls: [ './charts-standings.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsStandingsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    @Input() data: any;
    @Input() sortIndex: any;

    @ViewChild('chart', { static: true })
    chartRef: ElementRef;
    colorSeriasMin: string;
    colorSeriasMax: string;

    constructor(private zone: NgZone) {}

    private chart: am4charts.XYChart;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && changes.data.currentValue) {
            this.createColor(this.data.competition.name);

            const dataChart = MapDataHelper.mapingDataStandings(this.data.standings[0].table);

            this.createChart(dataChart);
        }
        if (changes.sortIndex && changes.sortIndex.currentValue) {
            if (this.sortIndex.title === this.data.competition.name) {
                const dataChart = MapDataHelper.mapingDataStandings(this.data.standings[this.sortIndex.index].table);
                this.createChart(dataChart);
            }
        }
    }

    private createColor(nameLiga: string) {
        switch (nameLiga) {
            case LigaNames.apl:
                this.colorSeriasMin = '#F2C6F5';
                this.colorSeriasMax = '#38003D';
                return;
            case LigaNames.laLiga:
                this.colorSeriasMin = '#FF0000';
                this.colorSeriasMax = '#901480';
                return;
        }
    }

    createChart(dataChart) {
        this.chart = am4core.create(this.chartRef.nativeElement, am4charts.XYChart);
        this.chart.logo.height = -1500;
        this.chart.hiddenState.properties.opacity = 0;
        this.chart.paddingBottom = 30;
        am4core.useTheme(am4themes_animated);
        this.chart.data = dataChart;

        const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'position';
        categoryAxis.adapter.add('getTooltipText', (text, target) => {
            const dataContext: any = { ...target.tooltipDataItem.dataContext };
            return dataContext.name;
        });
        categoryAxis.renderer.labels.template.fill = am4core.color('#ffffff');
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.minGridDistance = 15;
        categoryAxis.renderer.labels.template.dy = 35;
        categoryAxis.fontSize = 14;
        categoryAxis.renderer.tooltip.dy = 15;

        const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.dx = -25;
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        valueAxis.renderer.baseGrid.strokeOpacity = 0;
        valueAxis.renderer.labels.template.fill = am4core.color('#ffffff');

        const series = this.chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'points';
        series.dataFields.categoryX = 'position';
        series.tooltipText = '{name}: {valueY.value} points';
        series.tooltip.pointerOrientation = 'vertical';
        series.tooltip.dy = -35;
        series.columnsContainer.zIndex = 1;

        const columnTemplate = series.columns.template;
        columnTemplate.width = am4core.percent(50);
        columnTemplate.maxWidth = 30;
        columnTemplate.column.cornerRadius(60, 60, 10, 10);
        columnTemplate.strokeOpacity = 0;

        series.heatRules.push({
            target: columnTemplate,
            property: 'fill',
            dataField: 'valueY',
            min: am4core.color(this.colorSeriasMin),
            max: am4core.color(this.colorSeriasMax)
        });

        series.mainContainer.mask = undefined;

        const cursor = new am4charts.XYCursor();
        this.chart.cursor = cursor;
        cursor.lineX.disabled = true;
        cursor.lineY.disabled = true;
        cursor.behavior = 'none';

        const bullet: any = columnTemplate.createChild(am4charts.CircleBullet);
        bullet.circle.radius = 15;
        bullet.valign = 'bottom';
        bullet.align = 'center';
        bullet.isMeasured = true;
        bullet.mouseEnabled = false;
        bullet.verticalCenter = 'bottom';
        bullet.interactionsEnabled = false;

        const hoverState = bullet.states.create('hover');
        const outlineCircle = bullet.createChild(am4core.Circle);

        outlineCircle.adapter.add('radius', (radius, target) => {
            const circleBullet: any = target.parent;

            return circleBullet.circle.pixelRadius + 3;
        });

        const image = bullet.createChild(am4core.Image);
        image.width = 30;
        image.height = 30;
        image.horizontalCenter = 'middle';
        image.verticalCenter = 'middle';
        image.propertyFields.href = 'logo';

        image.adapter.add('mask', (mask, target) => {
            const circleBullet: any = target.parent;
            return circleBullet.circle;
        });

        let previousBullet;

        this.chart.cursor.events.on('cursorpositionchanged', (event) => {
            const dataItem: any = series.tooltipDataItem;

            if (dataItem.column) {
                const bullet = dataItem.column.children.getIndex(1);

                if (previousBullet && previousBullet !== bullet) {
                    previousBullet.isHover = false;
                }

                if (previousBullet !== bullet) {
                    const hs = bullet.states.getKey('hover');
                    hs.properties.dy = -bullet.parent.pixelHeight + 30;
                    bullet.isHover = true;

                    previousBullet = bullet;
                }
            }
        });
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {});
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
