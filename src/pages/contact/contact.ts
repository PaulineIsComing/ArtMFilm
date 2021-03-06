import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  objet: string;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {

  }

  //crée un nouveau mail dans une application du téléphone
  sendMessage() {
    this.socialSharing.shareViaEmail(this.message, this.objet, ['film@example.com']);
    this.objet = '';
    this.message = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
