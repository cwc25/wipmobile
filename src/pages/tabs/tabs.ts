import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleSummaryPage } from "../vehicle-summary/vehicle-summary";
import { CirclePage } from "../circle/circle";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Page: any = VehicleSummaryPage;
  tab2Page: any = CirclePage;
  mySelectedIndex: Number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    
  }

}
