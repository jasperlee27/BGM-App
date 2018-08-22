import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';

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
  @Input('walletAmount') walletAmount;
  // text: string;
  // walletAmount;

  constructor(private dataProvider: DataProvider, private auth: GlobalAuthProvider) {
    // console.log('Hello InnerWalletComponent Component');
    // this.text = 'Hello World';
  }

  ngOnInit(){
    this.walletAmount = this.auth.getAccValue();
  }

  getLatestAmount(){

    this.dataProvider.postWalletAmount(this.auth.getAccId()).subscribe(data => {

      //parse response from server
      console.log("Update wallet reponse");
      console.log("Received acc balance as  " + data.accountValue);
      this.auth.setAccValue(parseInt(data.accountValue));
      console.log("Global provider value of acc " +this.auth.getAccValue());
      this.walletAmount = this.auth.getAccValue();
    },
    err => {
      console.log("Error occured while getting account balance");
      console.log(err);
    });
    // this.navCtrl.setRoot(TabsPage);
    console.log("End getting amount");
  }
  
}
