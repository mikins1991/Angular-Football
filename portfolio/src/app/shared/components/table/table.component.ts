import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Standing } from 'src/app/pages/standings-all/standings/interface/standing.interface';
import { MapDataHelper } from 'src/app/pages/standings-all/standings/helper/map-data-helper';
import { DisplayedColumns } from '../constants/table.config';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: Standing.DataLiga;
    @Input() sortIndex: number;
    @ViewChild(MatSort, { static: true })
    sort: MatSort;
    dataTable: Standing.Table[];
    dataSource;
    readonly displayedColumns: string[] = DisplayedColumns;

    constructor() {}
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && changes.data.currentValue) {
            this.dataTable = MapDataHelper.mapingDataStandings(this.data.standings[0].table);
            this.dataSource = new MatTableDataSource(this.dataTable);

            this.createTableData();
        }
        if (changes.sortIndex && changes.sortIndex.currentValue) {
            this.dataTable = MapDataHelper.mapingDataStandings(this.data.standings[this.sortIndex].table);
            this.dataSource = new MatTableDataSource(this.dataTable);

            this.createTableData();
        }
    }

    createTableData() {
        this.dataSource.sort = this.sort;
    }

    ngOnInit() {}
}
