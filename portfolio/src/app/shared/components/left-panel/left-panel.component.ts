import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
} from '@angular/core';

import { PAGES } from '../shared/left-panel.config';

@Component({
  selector: 'left-panel-component',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelComponent implements OnInit, OnChanges {
  @Input() hide: boolean;
  constructor() {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('LeftPanelComponent -> hide', this.hide);
  }

  pages = PAGES;

  ngOnInit(): void {}
}
