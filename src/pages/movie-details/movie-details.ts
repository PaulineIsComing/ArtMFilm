import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {MovieById} from '../../models/movieById.model';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movie:MovieById;
  id:number;
  APIUrl1: String = 'https://api.themoviedb.org/3/movie/';
  APIUrl2: String = '?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.id = this.navParams.get('id');
    this.getInfo(this.id);
  }

  getInfo(id: number){
    const url = `${this.APIUrl1}${id}${this.APIUrl2}`;
    this.httpClient.get<MovieById>(url)
    .subscribe(
      (result:MovieById)=>{
        this.movie = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
