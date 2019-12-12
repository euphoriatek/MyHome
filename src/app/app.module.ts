import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import {SimpleService} from './api/simple-service.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';




@NgModule({
  declarations: [AppComponent,SignaturePadComponent],
  entryComponents: [SignaturePadComponent],
  imports: [BrowserModule,IonicStorageModule.forRoot(),SignaturePadModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule, OwlModule, AutoCompleteModule],
  providers: [
    HttpClient,
    DatePicker,
    SimpleService,
    StatusBar,
     File,
    FileOpener,
    
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
