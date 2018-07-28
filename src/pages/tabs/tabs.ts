import { Component } from '@angular/core';

import { RoulettePage } from '../roulette/roulette';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WalletPage } from '../wallet/wallet';
import { StreamPage } from '../stream/stream';
import { BiddingPage } from '../bidding/bidding';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RoulettePage;
  tab3Root = BiddingPage;
  tab4Root = ContactPage;
  tab5Root= WalletPage;
  tab6Root= StreamPage;

  constructor() {

  }
}
