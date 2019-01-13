import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {MovieById} from '../../models/movieById.model';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Calendar } from '@ionic-native/calendar';


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
  videoId: string;
  APIUrl1: string = 'https://api.themoviedb.org/3/movie/';
  APIUrl2: string = '?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR';

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private httpClient:HttpClient, private youtube: YoutubeVideoPlayer,
      private calendar: Calendar) {
    this.id = this.navParams.get('id');
    this.getInfo(this.id);
    this.getVideoId(this.id);




  }

  //récupere les données de l'api sur un film
  getInfo(id: number){
    const url = `${this.APIUrl1}${id}${this.APIUrl2}`;
    this.httpClient.get<MovieById>(url)
    .subscribe(
      (result:MovieById)=>{
        this.movie = result;
        //console.log(this.movie);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //récupere l'id du trailer du film sur youtube si il existe
  getVideoId(id: number){
    const url = `${this.APIUrl1}${id}${'/videos'}${this.APIUrl2}`;
    this.httpClient.get(url)
    .subscribe(result=>{
        var videos = result['results'];
        //parcours les videos pour trouver un trailer sur youtube
        for(let video of videos) {
          if(video.site === 'YouTube' && video.type === 'Trailer') {
            this.videoId = video.key;
            return;
          }
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //ouvre l'application calendrier du téléphone pour créer un événement
  createEventCalendar() {
    this.calendar.requestReadWritePermission();
    this.calendar.createEventInteractively("voir "+this.movie.title, null, null, new Date());
  }

  //ouvre le trailer dans l'application youtube du téléphone
  //!!! Ne fonctionne pas avec ionic serve utilisez cordova run android
  openYoutubeTrailer() {
    this.youtube.openVideo(this.videoId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
  }

}
