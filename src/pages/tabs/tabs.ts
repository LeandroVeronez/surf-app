import { Component } from '@angular/core';



import { HomePage } from '../home/home';
import { PraiasPage } from '../praias/praias';
import { MapasPage } from '../mapas/mapas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PraiasPage;
  tab3Root = MapasPage;

  constructor() {

  }
}
