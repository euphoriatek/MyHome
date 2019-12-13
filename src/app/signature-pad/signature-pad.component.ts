import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {PopoverController,Events} from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
})
export class SignaturePadComponent implements OnInit {

  @ViewChild(SignaturePad,{'static':false}) signaturePad: SignaturePad;
  @Input() type: string;
  signatureType:any;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 700,
    'canvasHeight': 300,
  };

  constructor(public popoverController: PopoverController,
  	// public navParams:NavParams,
  	private storage: Storage,
  	private router: Router,
  	public events: Events) {
    // console.log(this.navParams.get('type'));
    // this.signatureType = this.navParams.get('type');
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5); 
    this.signaturePad.clear();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
    this.storage.set('signature', this.signaturePad.toDataURL());
    setTimeout(() => {
      this.events.publish('signature:complete');
      this.DismissClick();
    }, 500);
  }	

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature(){
    this.signaturePad.clear();
  }

}
