import {
  OnInit,
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'matches',
  template: `<matches-component></matches-component>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchesContainer implements OnInit {
  ngOnInit(): void {}
}
