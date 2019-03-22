import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeseosProvider } from "../../providers/deseos/deseos";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public deseosProvider:DeseosProvider) {

  }

}
