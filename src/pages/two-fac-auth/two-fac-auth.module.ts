import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoFacAuthPage } from './two-fac-auth';

@NgModule({
  declarations: [
    TwoFacAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoFacAuthPage),
  ],
})
export class TwoFacAuthPageModule {}
