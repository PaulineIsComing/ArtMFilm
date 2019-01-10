import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from '../../models/movie.model';
import {HttpClient} from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  
  tableau:Movie[];
  img_path:String = "https://image.tmdb.org/t/p/original";

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1998').subscribe(
      (result:Movie[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

}