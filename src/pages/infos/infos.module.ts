import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfosPage } from './infos';
import { PraiasPageModule } from '../praias/praias.module';

@NgModule({
  declarations: [
    InfosPage
  ],
  imports: [
    IonicPageModule.forChild(InfosPage),
    PraiasPageModule
  ],
})
export class InfosPageModule {}
