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

  date: number;
  debut: String;
  tableau: Movie[];
  img_path: String = "https://image.tmdb.org/t/p/original";
  private basic_url = "https://api.themoviedb.org/3/discover/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.httpClient.get<Movie[]>(this.basic_url).subscribe(
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

  search(){
    if(this.date != null && this.debut == null){
      const url = `${this.basic_url}&year=${this.date}`;
      this.httpClient.get<Movie[]>(url).subscribe(
        (result:Movie[])=>{
          this.tableau = result;
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    if(this.date == null && this.debut != null){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=fr&query=${this.debut}`;
      this.httpClient.get<Movie[]>(url).subscribe(
        (result:Movie[])=>{
          this.tableau = result;
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    if(this.date != null && this.debut != null){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=fr&query=${this.debut}&year=${this.date}`;
      this.httpClient.get<Movie[]>(url).subscribe(
        (result:Movie[])=>{
          this.tableau = result;
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

}
