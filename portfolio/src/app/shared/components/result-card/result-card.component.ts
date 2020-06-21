import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultCardComponent implements OnInit {
  @Input() title: string;

  hide: boolean;
  constructor() {}

  togglePanel() {
    this.hide = !this.hide;
  }

  ngOnInit(): void {}
}
