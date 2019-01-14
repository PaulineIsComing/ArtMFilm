import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Artiste} from '../../models/artiste.model';


/**
 * Generated class for the ArtisteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artiste-details',
  templateUrl: 'artiste-details.html',
})
export class ArtisteDetailsPage {

  artiste:Artiste;
  id:number;
  videoId: string;
  APIUrl1: string = 'https://api.themoviedb.org/3/person/';
  APIUrl2: string = '?api_key=a11c8337b79630d0217518e8f78dc5ad&language=fr';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.id = this.navParams.get('id');
    this.getInfo(this.id);
  }

  //récupere les données de l'api sur un artiste
  getInfo(id: number){
    const url = `${this.APIUrl1}${id}${this.APIUrl2}`;
    this.httpClient.get<Artiste>(url)
    .subscribe(
      (result:Artiste)=>{
        this.artiste = result;
        console.log(this.artiste);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisteDetailPage');
  }

}
