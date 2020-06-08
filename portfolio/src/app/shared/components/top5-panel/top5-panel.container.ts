import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'top5-panel',
  template: `<top5-panel-component></top5-panel-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Top5PanelContainer implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
