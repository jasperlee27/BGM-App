import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalAuthProvider } from '../../providers/global-auth/global-auth';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the WithdrawModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw-modal',
  templateUrl: 'withdraw-modal.html',
})
export class WithdrawModalPage {
  todo = {
    title: '',
    description: ''
  };

  constructor(private dataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private auth: GlobalAuthProvider, public alertCtrl: AlertController) {
  }

  logForm(form) {
    console.log(form.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawModalPage');
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  onSubmit(myForm) {
    console.log("Input params for form: " + JSON.stringify(myForm.value));
    var amtReq = myForm.value.amount;
    var bankTypeReq = myForm.value.bankType;
    var accNoReq = myForm.value.accNo;
    var message = 'Amount Requested: ' + amtReq + '\n Bank Type: ' + bankTypeReq + '\n Account No.: ' + accNoReq;
    //Alert Controller CONFIRM & POST REQUEST
    this.presentConfirm(amtReq, bankTypeReq, accNoReq);

    //RESET FORM
    // myForm.reset();

    // console.log("After resetting: " + JSON.stringify(myForm.value));
    console.log("individaul vars " + amtReq + " bank type: " + bankTypeReq + " acc No : " + accNoReq + "acc id " + this.auth.getAccId());
    //check if form valid
    if (myForm.valid) {
      //check if passwords mismatch
      if (myForm.value.password !== myForm.value.password2) {
        console.log("Passwords do not match, not sending request");
      }
      //passwords match
      else {
        console.log("Valid form, sending request");
        // this.dataApiService.postRegistration(myForm.value.username, myForm.value.password, myForm.value.email, myForm.value.countrySel, myForm.value.referralCode).subscribe(data => {
        //     console.log("Login reponse " + data);
        // },
        //     err => {
        //         console.log("Error: " + err.error.message);
        //     });
        console.log("login function completed");
      }
    }
    //params not filled up
    else {
      console.log("form invalid, not sending request");
    }
  }

  presentConfirm(amtReq, bankTypeReq, accNoReq) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Withdrawal Details',
      message: 'Amount Requested: ' + amtReq + '<br> Bank Type: ' + bankTypeReq + '<br> Account No.: ' + accNoReq,
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            return true;
          }
          
        },
        {
          text: 'Withdraw',
          handler: () => {
            console.log('Withdraw clicked');
            //POST REQUEST
            
            if (this.makeWithdrawal(amtReq, bankTypeReq, accNoReq)){
              this.dismiss();
            }

            else{
              return true;
            }
          }
        }
      ]
    });
    alert.present();
    // alert.onDidDismiss((data) => {
    //   console.log('Yes/No', data);
    // });
    return alert;
  }

  makeWithdrawal(amtReq, bankTypeReq, accNoReq): boolean{
    
    console.log('Requesting withdraw');
    this.dataProvider.postReqWithdrawal(this.auth.getAccId(),amtReq,bankTypeReq,accNoReq).subscribe(data => {
      //receive successfully
      console.log("status " + data.status)
      // this.auth.setAccValue(resReceived.accountValue);
      // this.walletBalance = this.auth.getAccValue();
      // this.updateStatementHistory();
      // this.processGameWithdrawal(Math.abs(resReceived.order.profit));
    },
      err => {
        console.log("Error occured while withdrawing");
        console.log(err);
      });
    return true;
    return false;
  }
}
