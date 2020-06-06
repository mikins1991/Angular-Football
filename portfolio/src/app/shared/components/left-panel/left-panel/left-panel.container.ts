import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'left-panel',
  template: `<left-panel-component></left-panel-component>`,
})
export class LeftPanelContainer implements OnInit {
  ngOnInit(): void {}
}
