import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { OwlModule } from 'ngx-owl-carousel';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import {SimpleService} from './api/simple-service.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(),BrowserModule,SignaturePadModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule, OwlModule, AutoCompleteModule],
  providers: [
    HttpClient,
    DatePicker,
    SimpleService,
    StatusBar,
    
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
