import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  hide: boolean;
  togglePanel() {
    this.hide = !this.hide;
  }
  isLeftNavigationOpened = true;
}
