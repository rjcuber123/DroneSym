import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { DroneDataService } from './drone-service/drone-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AgmCoreModule.forRoot({
    	apiKey: environment.mapsApiKey
    })
  ],
  providers: [
    DroneDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
