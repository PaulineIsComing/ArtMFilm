import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Artiste} from '../../models/artiste.model';
import {HttpClient} from '@angular/common/http';
import { ArtisteDetailsPage } from '../artiste-details/artiste-details';


@IonicPage()
@Component({
  selector: 'page-artiste',
  templateUrl: 'artiste.html',
})
export class ArtistePage {

  tableau:Artiste[];
  img_path:String = "https://image.tmdb.org/t/p/original";

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.httpClient.get<Artiste[]>('https://api.themoviedb.org/3/person/popular?api_key=a11c8337b79630d0217518e8f78dc5ad&language=en-US&page=1').subscribe(
      (result:Artiste[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  showDetails(id: number) {
    this.navCtrl.push(ArtisteDetailsPage, {id: id})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistePage');
  }

}
