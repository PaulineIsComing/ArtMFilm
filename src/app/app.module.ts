import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtisteDetailsPage } from '../pages/artiste-details/artiste-details';
import { ArtistePage } from '../pages/artiste/artiste';
import { ContactPage } from '../pages/contact/contact';
import { JobPage } from '../pages/job/job';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { MoviePage } from '../pages/movie/movie';
import { JobDetailsPage } from '../pages/job-details/job-details';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Calendar } from '@ionic-native/calendar';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtisteDetailsPage,
    ArtistePage,
    ContactPage,
    JobPage,
    MovieDetailsPage,
    MoviePage,
    JobDetailsPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtisteDetailsPage,
    ArtistePage,
    ContactPage,
    JobPage,
    MovieDetailsPage,
    MoviePage,
    JobDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    SocialSharing,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
