import { Component } from '@angular/core';

/**
 * Generated class for the InnerWalletComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inner-wallet',
  templateUrl: 'inner-wallet.html'
})
export class InnerWalletComponent {

  // text: string;
  walletAmount;

  constructor() {
    // console.log('Hello InnerWalletComponent Component');
    // this.text = 'Hello World';
  }

  ngOnInit(){
    this.walletAmount = 500;
  }

}
