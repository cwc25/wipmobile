import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { VehicleSummaryPage } from "../pages/vehicle-summary/vehicle-summary";
import { CirclePage } from "../pages/circle/circle";
import {PopoverPage} from "../pages/popover/popover";
import { CarService } from '../services/car-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    VehicleSummaryPage,
    CirclePage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    VehicleSummaryPage,
    CirclePage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    CarService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
