import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Refresher, ToastController } from 'ionic-angular';
import {PopoverPage} from '../popover/popover'
import { CarService } from '../../services/car-service';
import { DriverReport, DriverData } from '../../Model/DriverData';

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
  driverData:DriverData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public popoverCtrl: PopoverController,
              public toastCtrl: ToastController,
              private carService: CarService ) {
    
  }

  ionViewDidLoad() {
    console.log("tab1 page");
    /* this.driverData = new DriverData();
    this.driverData.Id = "123";
    this.driverData.VehicleId="456"; */
    this.carService.GetMilesById(200).subscribe(data => this.driverData=data[0]);
    //this.carService.GetMilesById(200).subscribe(data => console.log(data));
  }

  popover(ev){
    console.log("popover clicked");
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ev:ev});
  }

  doRefresh(refresher: Refresher){
    this.carService.GetMilesById(201).subscribe(data => 
      setTimeout(() => {
        this.driverData = data[0];
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Data has been updated.',
          duration: 3000
        });
        toast.present();
      }, 100)
    )
    
  }

}
