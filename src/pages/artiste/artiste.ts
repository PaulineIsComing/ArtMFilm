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
  img_path: string = 'https://image.tmdb.org/t/p/original';
  text: string;
  basic_url: string = 'https://api.themoviedb.org/3/person/popular?api_key=a11c8337b79630d0217518e8f78dc5ad&language=en-US&page=1'

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.httpClient.get<Artiste[]>(this.basic_url).subscribe(
      (result:Artiste[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //affiche les détails d'un artiste dans une nouvelle page
  showDetails(id: number) {
    this.navCtrl.push(ArtisteDetailsPage, {id: id})
  }

  //effectue une de film requête par rapport aux champs du formulaire et affiche les résultats
  search(){
    var url;
    if(this.text == null || this.text.length == 0){
      url = this.basic_url;
    }
    else {
      url = `https://api.themoviedb.org/3/search/person?api_key=a11c8337b79630d0217518e8f78dc5ad&language=fr&query=${this.text}`;
    }
    this.httpClient.get<Artiste[]>(url).subscribe(
      (result:Artiste[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistePage');
  }

}
