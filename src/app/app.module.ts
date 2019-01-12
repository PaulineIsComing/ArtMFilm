import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtistePage } from '../pages/artiste/artiste';
import { ContactPage } from '../pages/contact/contact';
import { JobPage } from '../pages/job/job';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { MoviePage } from '../pages/movie/movie';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtistePage,
    ContactPage,
    JobPage,
    MovieDetailsPage,
    MoviePage


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
    ArtistePage,
    ContactPage,
    JobPage,
    MovieDetailsPage,
    MoviePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
