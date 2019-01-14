import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Job } from '../../models/job.model';

/**
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {

  job: Job;
  jobs: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.job = this.navParams.get('job');
    this.jobs = this.job.jobs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailsPage');
  }

}
