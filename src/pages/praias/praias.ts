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
  artistas = [
    {nome: 'Christopher G. Wallace', nomeArtistico:'NOTORIOUS B.I.G.', genero: 'Rapp', img:'https://www.alux.com/wp-content/uploads/2017/06/Notorious-B.I.G-Net-Worth.jpg', historia:'Biggie Smalls, also known as "The Notorious B.I.G.," was a revered hip-hop artist and face of East Coast gangsta rap. He was shot and killed on March 9, 1997.'},
  ];
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraiasPage');
  }

  irParaInfos(item){
    let parametros = {
      artista:item
    };
    this.navCtrl.push(InfosPage, parametros);
  }

  

}
