import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {
  localNaTela;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    let lugar = this.navParams.get('lugar');
    lugar.video = this.sanitizer.bypassSecurityTrustResourceUrl(lugar.video);
    this.localNaTela = lugar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPage');
  }

  

}
