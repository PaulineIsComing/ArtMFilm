import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistePage } from './artiste';

@NgModule({
  declarations: [
    ArtistePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistePage),
  ],
})
export class ArtistePageModule {}
