import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DummyChatPage } from './dummy-chat';

@NgModule({
  declarations: [
    DummyChatPage,
  ],
  imports: [
    IonicPageModule.forChild(DummyChatPage),
  ],
})
export class DummyChatPageModule {}
