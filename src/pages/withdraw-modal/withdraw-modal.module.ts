import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawModalPage } from './withdraw-modal';

@NgModule({
  declarations: [
    WithdrawModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WithdrawModalPage),
  ],
})
export class WithdrawModalPageModule {}
