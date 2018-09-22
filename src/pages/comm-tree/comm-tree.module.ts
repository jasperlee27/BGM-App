import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommTreePage } from './comm-tree';

@NgModule({
  declarations: [
    CommTreePage,
  ],
  imports: [
    IonicPageModule.forChild(CommTreePage),
  ],
})
export class CommTreePageModule {}
