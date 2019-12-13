import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {AutoCompleteService} from 'ionic4-auto-complete';
import { LoadingController } from '@ionic/angular';
@Injectable()
export class SimpleService implements AutoCompleteService {
  loaderToShow: any;
  labelAttribute = 'name';

  private countries:any[] = [];

  constructor(private http:HttpClient,public loadingController: LoadingController) {

  }

  getResults(keyword:string):Observable<any[]> {
    let observable:Observable<any>;

    if (this.countries.length === 0) {
      observable = this.http.get('https://restcountries.eu/rest/v2/all');
    } else {
      observable = of(this.countries);
    }

    return observable.pipe(
      map(
        (result) => {
          return result.filter(
            (item) => {
              return item.name.toLowerCase().startsWith(
                keyword.toLowerCase()
                );
            }
            );
        }
        )
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
}