import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapasPage } from './mapas';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapasPage,
    
  ],
  imports: [
    IonicPageModule.forChild(MapasPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALixsuuHy_8BLqB2WSIOsw_kOEBM2cp0s'
    })
  ],
})
export class MapasPageModule {}

