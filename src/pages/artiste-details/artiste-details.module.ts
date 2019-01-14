import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtisteDetailsPage } from './artiste-details';

@NgModule({
  declarations: [
    ArtisteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtisteDetailsPage),
  ],
})
export class ArtisteDetailsPageModule {}
