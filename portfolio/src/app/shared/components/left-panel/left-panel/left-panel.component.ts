import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PAGES } from './shared/left-panel.config';

@Component({
  selector: 'left-panel-component',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
})
export class LeftPanelComponent implements OnInit {
  constructor() {}

  pages = PAGES;

  ngOnInit(): void {}
}
