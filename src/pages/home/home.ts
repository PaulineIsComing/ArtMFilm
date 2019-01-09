import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isMessageVisible:boolean = false;

  constructor(public navCtrl: NavController) {

  }

  //boolean qui permet d'afficher ou non les détails concernant l'API grâce au bouton présent sur le code html.
  showMessage(){
    this.isMessageVisible = true;
  }

}
