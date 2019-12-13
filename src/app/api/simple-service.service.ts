import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { Storage } from '@ionic/storage';

import {AutoCompleteService} from 'ionic4-auto-complete';
import { LoadingController } from '@ionic/angular';
@Injectable()
export class SimpleService implements AutoCompleteService {
  loaderToShow: any;
  labelAttribute = 'name';
  inResidentUser:any=[];
  residentUnit:any=[];

  private countries:any[] = [];

  constructor(private http:HttpClient,private storage: Storage,public loadingController: LoadingController,public alertController: AlertController) {
    this.storage.get('inResidentUser').then((val) => {
      if(val){
        this.inResidentUser = val;
      }
    });
    this.storage.get('unitList').then((val) => {
      if(val){
        this.residentUnit = val;
      }
    });
  }

  getResults(keyword:string):Observable<any[]> {
    if(keyword.length==0 || keyword.length==null){
      return
    }
    let observable:Observable<any>;

    if (this.countries.length === 0) {
      observable = this.inResidentUser;
    } else {
      observable = this.inResidentUser;
    }
    return this.inResidentUser.filter(
      (item) => {
        return item.name.toLowerCase().startsWith(
          keyword.toLowerCase()
          );
      }
      );
  }

  getUnit(keyword:string):Observable<any[]> {
    debugger;
    if(keyword && (keyword.length==0 || keyword.length==null)){
      return
    }
    let observable:Observable<any>;

    return this.residentUnit.filter(
      (item) => {
        return item.name.toLowerCase().startsWith(
          keyword.toLowerCase()
          );
      }
      );
  }


  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait...'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
  }

  hideLoader() {
    this.loadingController.dismiss();
  }

  async presentAlertWithSingle(title) {
    const alert = await this.alertController.create({
      message: title,
      buttons: ['OK']
    });

    await alert.present();
  }
}