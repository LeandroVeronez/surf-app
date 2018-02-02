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
      pais: 'Antartica', 
      local: 'Antartica',
      video: 'https://www.youtube.com/embed/NiJ8QsxrPLQ', //faltou o video
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'Asia', 
      local: 'Indonesia - Bali',
      video: 'https://www.youtube.com/embed/3tZkvA4aCOY',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'Australia', 
      local: 'Byron Bay',
      video: 'https://www.youtube.com/embed/LnfArYg7PR4',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'Brasil', 
      local: 'Guarujá - Praia do Tombo',
      video: 'https://www.youtube.com/embed/htQ1AYWvog8',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'Canadá', 
      local: 'Tofino',
      video: 'https://www.youtube.com/embed/ZFat-Gd-ws8',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'EUA', 
      local: 'San Diego - Ocean Beach',
      video: 'https://www.youtube.com/embed/o0OVz52J2E8',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'32.751247', //ou 32°45'04.5"N 
      longitude:'-117.247201' //ou 117°14'49.9"W
    },
    {
      pais: 'França', 
      local: 'Praia a Tocha (La torche)',
      video: 'https://www.youtube.com/embed/bYz0wTfsHMg',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
    },
    {
      pais: 'Inglaterra', 
      local: 'Cornwall',
      video: 'https://www.youtube.com/embed/BrxX7DHxspw',
      historia:'O Canhão da Nazaré, ou Cana da Nazaré é um desfiladeiro submarino de origem tectónica situado ao largo da costa da Nazaré, Portugal, relacionado com a falha da Nazaré-Pombal, começa a definir-se a cerca de 500 metros da costa. Considerado por muitos o maior da Europa, separa a costa da Península Ibérica na direção este-oeste desde a plataforma continental, numa extensão de cerca de 211 km começando a uma profundidade de 50 metros até à planície abissal Ibérica onde atinge profundidades na ordem dos 5000 metros.',
      latitude:'',
      longitude:''
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
