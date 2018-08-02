import { Component } from '@angular/core';

import { RoulettePage } from '../roulette/roulette';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { WalletPage } from '../wallet/wallet';
import { StreamPage } from '../stream/stream';
import { BiddingPage } from '../bidding/bidding';
import { HashingPage } from '../hashing/hashing';
import { TrehuntPage } from '../trehunt/trehunt';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  tab1Root = HomePage;
  tab2Root = TrehuntPage;
  tab3Root = HashingPage;
  // tab4Root = ContactPage;
  tab4Root= WalletPage;
  tab5Root= StreamPage;

  constructor() {

  }
}
