import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import {PopoverPage} from '../popover/popover'

/**
 * Generated class for the VehicleSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-vehicle-summary',
  templateUrl: 'vehicle-summary.html',
})
export class VehicleSummaryPage {

  totalMiles: number = 100;
  average:number = 56;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController ) {
    
  }

  ionViewDidLoad() {
    console.log("tab1 page");
  }

  popover(ev){
    console.log("popover clicked");
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev:ev});
  }

}
