import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//declare var WindowsAzure: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  client: any;
  
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      menuCtrl.enable(true, 'myMenu');
     // this.client = new WindowsAzure.MobileServiceClient('http://YourAzureMobileApp.azurewebsites.net');

    });
  }
}

