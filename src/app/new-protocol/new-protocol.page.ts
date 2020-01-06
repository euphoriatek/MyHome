import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SimpleService } from '../api/simple-service.service';

@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.page.html',
  styleUrls: ['./new-protocol.page.scss'],
})
export class NewProtocolPage implements OnInit {
  selectedProtocol:any;
  isProtocolSelected:any=false;
  protocolList:any=[];
  constructor(public service:SimpleService,private router: Router,private storage: Storage) { }

  ngOnInit() {
    this.storage.get('protocolData').then((val) => {
      if(val){
        this.protocolList = val;
      }
    });
  }

  goToParties(){
    console.log("this is selected value of protocol "+this.selectedProtocol);
    if(this.selectedProtocol=='' || this.selectedProtocol==null){
      this.service.presentAlertWithSingle('Please select atleast one Protocol!');
    } else if(this.selectedProtocol == 'handover') {
      this.service.showLoader("please Wait...");
      setTimeout(() => {
        this.router.navigate(['/parties']);
      }, 1000);
    } else {
      this.service.presentAlertWithSingle('Currently not available this Protocol.Please select another one!');
    }
  }

}
