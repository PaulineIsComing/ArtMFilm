import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Job} from '../../models/job.model';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  tableau:Job[];
  img_path:String = "https://image.tmdb.org/t/p/original";

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.httpClient.get<Job[]>('https://api.themoviedb.org/3/configuration/jobs?api_key=a11c8337b79630d0217518e8f78dc5ad').subscribe(
      (result:Job[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
  }

}
