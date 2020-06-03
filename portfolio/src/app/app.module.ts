import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelModule } from './shared/components/left-panel/left-panel/left-panel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LeftPanelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
