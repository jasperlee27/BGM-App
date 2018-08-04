import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashLogoPage } from './splash-logo';

@NgModule({
  declarations: [
    SplashLogoPage,
  ],
  imports: [
    IonicPageModule.forChild(SplashLogoPage),
  ],
})
export class SplashLogoPageModule {}
