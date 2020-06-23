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
  OnDestroy,
} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { MapDataHelper } from '../helper/map-data-helper';

@Component({
  selector: 'chart-standings-v2',
  templateUrl: './chart-standings-v2.component.html',
  styleUrls: ['./chart-standings-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartStandingsV2Component implements OnInit, OnChanges, OnDestroy {
  @Input() data: any;

  @ViewChild('chart', { static: true }) chartRef: ElementRef;

  constructor(private zone: NgZone) {}

  private chart: am4charts.XYChart;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      const newdata = this.data.standings[0].table.map((element) => {
        element.name = element.team.name;
      });

      const dataChart = MapDataHelper.mapingDataStandings(
        this.data.standings[0].table
      );

      this.createChart(dataChart);
    }
  }

  createChart(dataChart) {
    console.log(
      'ChartStandingsV2Component -> createChart -> dataChart',
      dataChart
    );
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    this.chart = am4core.create(this.chartRef.nativeElement, am4charts.XYChart);
    this.chart.logo.height = -1500;
    this.chart.hiddenState.properties.opacity = 0;
    this.chart.paddingBottom = 30;

    this.chart.data = dataChart;

    const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'position';
    categoryAxis.adapter.add('getTooltipText', (text, target) => {
      const dataContext: any = { ...target.tooltipDataItem.dataContext };
      return dataContext.name;
    });
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;
    categoryAxis.renderer.labels.template.dy = 5;

    const image = new am4core.Image();
    image.horizontalCenter = 'middle';
    image.width = 35;
    image.height = 35;
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
    series.tooltipText = '{valueY.value}';
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    series.columns.template.adapter.add('fill', (fill, target) => {
      const color = this.chart.colors.getIndex(target.dataItem.index);
      return color;
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
