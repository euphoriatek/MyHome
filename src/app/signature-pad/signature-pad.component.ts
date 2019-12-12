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
    'backgroundColor': 'rgb(249,249,249,1)',
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
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

   drawComplete() {
    console.log(this.signaturePad.toDataURL());
    this.storage.set(this.signatureType, this.signaturePad.toDataURL());
    this.DismissClick();
    this.events.publish('signature:complete');
  }	

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature(){
    this.signaturePad.clear();
  }

}
