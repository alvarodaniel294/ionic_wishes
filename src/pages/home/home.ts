import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeseosProvider } from '../../providers/deseos/deseos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public deseosProvider:DeseosProvider) {

    // deseosProvider.testProvider();
  }



}
