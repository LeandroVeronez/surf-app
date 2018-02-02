import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule } from 'ionic-angular';
import { InfosPage } from './infos';
import { PraiasPageModule } from '../praias/praias.module';

@NgModule({
  declarations: [
    InfosPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(InfosPage),
    PraiasPageModule
  ],
})
export class InfosPageModule {}
