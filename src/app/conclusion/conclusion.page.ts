import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ModalController } from '@ionic/angular';
import { NavController, Platform,PopoverController,Events } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ModalPage } from '../modal/modal.page';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.page.html',
  styleUrls: ['./conclusion.page.scss'],
})
export class ConclusionPage implements OnInit {
  currentSignatureType:any;
  incomingResSign:any;
  outgoingResSign:any;
  tuCuSign:any;
  RSCSign:any;

  letterObj = {
    to: '',
    from: '',
    text: ''
  }

  pdfObj = null;

  @ViewChild(SignaturePad,{'static':false}) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 700,
    'canvasHeight': 300,
    'backgroundColor': 'rgb(255,255,255)',
  };

  constructor(private router: Router,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public events: Events,
    private datePicker: DatePicker,
    public navCtrl: NavController, 
    private plt: Platform, 
    private storage: Storage,
    private file: File, 
    private fileOpener: FileOpener) {
    this.events.subscribe('signature:complete', () => {
      this.settheSignatureValue();
    }); }

    ngOnInit() {

    }

    settheSignatureValue(){
      this.storage.get(this.currentSignatureType).then((val) => {
        if(val){
          if(this.currentSignatureType == 'Signature Resident (incoming)'){
            this.incomingResSign = val;
          } else if(this.currentSignatureType == 'Signature Resident (outgoing)'){
            this.outgoingResSign = val;
          } else if(this.currentSignatureType == 'Signature TU / GU'){
            this.tuCuSign = val;
          } else {
            this.RSCSign = val;
          }
          this.storage.set(this.currentSignatureType, '');
        }
      });
    }



    async presentPopover(typeOfSignature: any) {
      this.currentSignatureType = typeOfSignature;
      const popover = await this.popoverController.create({
        component: ModalPage,
        componentProps:{'type':typeOfSignature},
        translucent: true
      });
      return await popover.present();
    }


    async DismissClick() {
      debugger;
      await this.popoverController.dismiss();
    }

    ngAfterViewInit() {
      // this.signaturePad is now available
      this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
      this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
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





    createpdf(){

      var docDefinition = {
        content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        this.letterObj.to,

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
          'Bacon',
          'Rips',
          'BBQ',
          ]
        }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 15, 0, 0]
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          }
        }
      }
      this.pdfObj = pdfMake.createPdf(docDefinition);
    }


    downloadpdf() {
      if (this.plt.is('cordova')) {
        this.pdfObj.getBuffer((buffer) => {
          var blob = new Blob([buffer], { type: 'application/pdf' });

          // Save the PDF to the data Directory of our App
          this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
            // Open the PDf with the correct OS tools
            this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
          })
        });
      } else {
        // On a browser simply use download!
        this.pdfObj.download();
      }
    }




  }







