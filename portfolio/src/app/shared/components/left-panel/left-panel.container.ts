import {
  OnInit,
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'left-panel',
  template: `<left-panel-component [hide]="hide"></left-panel-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelContainer implements OnInit {
  @Input() hide: boolean;

  ngOnInit(): void {}
}
