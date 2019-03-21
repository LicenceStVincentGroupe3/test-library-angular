import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as Francedepartment from 'fusionmaps/maps/fusioncharts.francedepartment';
import * as CanvasJS from 'canvasjs';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { DonutComponent } from './donut/donut.component';
import { AreaComponent } from './area/area.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, FusionMaps, Francedepartment, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
