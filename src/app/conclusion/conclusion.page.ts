import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.page.html',
  styleUrls: ['./conclusion.page.scss'],
})
export class ConclusionPage implements OnInit {
  @ViewChild(SignaturePad,{'static':false}) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 700,
    'canvasHeight': 300,
    'backgroundColor': 'rgb(255,255,255)',
  };

  constructor(private router: Router,private datePicker: DatePicker) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clearSignature(){
    this.signaturePad.clear();
  }

  goTomiscellaneous(){
    this.router.navigate(['/miscellaneous'])
  }
  datePick(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
