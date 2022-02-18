import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridTilesComponent } from './grid-tiles/grid-tiles.component';
import { FlexboxTilesComponent } from './flexbox-tiles/flexbox-tiles.component';
import { AppRoutingModuleModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModuleModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FlexboxTilesComponent,
    GridTilesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
