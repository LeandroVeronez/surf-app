import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfosPage } from './infos';
import { PraiasPage } from '../praias/praias';

@NgModule({
  declarations: [
    InfosPage,
  ],
  imports: [
    IonicPageModule.forChild(InfosPage),
  ],
})
export class InfosPageModule {}
