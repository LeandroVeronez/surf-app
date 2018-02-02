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
    {
      pais: 'Portugal', 
      local: 'Nazaré',
      video: 'https://www.youtube.com/embed/OCvSLs1YDwE',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.'
    },
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
