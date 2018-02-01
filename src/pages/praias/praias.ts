import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfosPage } from '../infos/infos';

/**
 * Generated class for the PraiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-praias',
  templateUrl: 'praias.html',
})
export class PraiasPage {
  lugares = [
    {pais: 'Brasil', local: 'Ubatuba', img:'', historia:'ushushs'},
  ];
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraiasPage');
  }

  irParaInfos(item){
    let parametros = {
      lugar:item
    };
    this.navCtrl.push(InfosPage, parametros);
    console.log(parametros);
  }

  

}
