import { Component } from '@angular/core';

import { RoulettePage } from '../roulette/roulette';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WalletPage } from '../wallet/wallet';
import { StreamPage } from '../stream/stream';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RoulettePage;
  tab3Root = ContactPage;
  tab4Root= WalletPage;
  tab5Root= StreamPage;

  constructor() {

  }
}
