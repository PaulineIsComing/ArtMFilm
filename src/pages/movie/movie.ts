import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from '../../models/movie.model';
import {HttpClient} from '@angular/common/http';
import {MovieDetailsPage} from "../movie-details/movie-details";

//https://api.themoviedb.org/3/movie/324857?api_key=a11c8337b79630d0217518e8f78dc5ad
//https://api.themoviedb.org/3/movie/324857/videos?api_key=a11c8337b79630d0217518e8f78dc5ad
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

  showDetails(id: number) {
    this.navCtrl.push(MovieDetailsPage, {id: id})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

}
