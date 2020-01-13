import { Component, OnInit,ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { Storage } from '@ionic/storage';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { LoadingController,IonContent } from '@ionic/angular';
import { SimpleService } from '../api/simple-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-room-object',
  templateUrl: './room-object.page.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
  styleUrls: ['./room-object.page.scss'],
})
export class RoomObjectPage implements OnInit {
  @ViewChild(IonContent,{'static':false}) content: IonContent;
  activeTabName:any='okay';
  openslider:any=false;
  sybTabName:any;
  isShared:any=false;
  openInfoSlide:any=false;
  costby:any;
  image:any=''
  roomComponent:any;
  currentComponent:any;
  mangel:any={'title':'','description':'','service_provider':'','action':'','cost_by':'','location':'','image':''};
  normalabgenutzt:any={'title':'','description':'','location':'','image':''};
  nachreinigung:any={'title':'','description':'','service_provider':'','cost_by':'','location':'','image':'','pan_location':''};
  nichtVorhanden:any={'title':'','description':'','service_provider':'','cost_by':'','location':'','image':'','pan_location':''};
  inspectionArr:any=[];
  currentCmp:any;
  costbyprotocol:any;
  actionprotocol:any;
  roomIdObj:any;
  roomTypeComponent:any=[];
  doneComponentVar:any=[];

  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor(
    private storage: Storage,
    public loadingController: LoadingController,
    private router: Router,
    private camera: Camera,
    public service:SimpleService,
    public alertController: AlertController,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        if (params && params.roomInfo) {
          this.roomIdObj = JSON.parse(params.roomInfo);
        }
      });
     }

  ngOnInit() {
    this.storage.get('Korridor').then((val) => {
      if(val){
        this.roomTypeComponent=[];
        this.roomComponent = val;
        for (let index = 0; index < this.roomComponent.length; index++) {
          // this.roomComponent[index].complete = false;
          if(this.roomComponent[index].room_type_component.length>0){
            for(var indexi = 0; indexi < this.roomComponent[index].room_type_component.length; indexi++){
              if(this.roomIdObj.id == this.roomComponent[index].room_type_component[indexi]){
                this.roomTypeComponent.push(this.roomComponent[index]);
              }
            }
          }
        }
      }
    });

    this.storage.get('completeComponent').then((val) => {
			if(val){
        this.doneComponentVar = val;
        for (let index = 0; index < this.doneComponentVar.length; index++) {
        //  if(this.roomIdObj.id == this.doneComponentVar[index].room_id){
        //   this.roomTypeComponent[this.doneComponentVar[index].component_id].complete = true;
        //  }
        }
      }
		});
  }

  openSliderContent(componentIndex,componentName){
    this.currentCmp = componentName;
    this.currentComponent = componentIndex;
    this.openslider =  true;
  }

  closeSliderContent(){
    this.currentCmp = '';
    this.openslider =  false;
    this.isShared = false;
    this.costby = '';
  }

  openCam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      alert("error "+JSON.stringify(err))
    });

  }

  //for outside click event
  onClick(event){
  }

  openInfoSlider(infoSlideName){
    this.openInfoSlide = true;
    this.isShared = false;
    this.sybTabName = infoSlideName;
    this.costby = '';
  }
  closeInfoSlider(getSubProtocol){
    if(this.costbyprotocol!=''){
      this.storage.set(this.currentCmp,this.costbyprotocol);
    } if(this.actionprotocol!=''){
      this.storage.set(this.currentCmp,this.actionprotocol);
    }
    this.openInfoSlide = false;
  }

  gofurther(componentIndex,componentName){
    var completeComponentArr = {'component_id':componentIndex,'room_id':this.roomIdObj.id};
    this.doneComponentVar.push(completeComponentArr);
    this.storage.set('completeComponent', this.doneComponentVar);
    this.service.showLoader('Please Wait...');
    this.roomComponent[componentIndex].complete_inspection=componentName;
    this.costbyprotocol='';
    this.actionprotocol='';
    setTimeout(()=>{
      this.service.hideLoader();
      this.content.scrollToTop(0);
      this.activeTabName = 'okay';
    },800)
    this.roomComponent[componentIndex].complete=true;
    this.roomComponent[componentIndex].inspection.push(componentName);
    if(componentIndex == this.roomComponent.length-1){
      this.openslider = false;
    } else {
      this.currentComponent++;
    }
    if(componentName=='mangel'){
      this.inspectionArr.push(this.mangel);
      this.storage.set('mangel',this.inspectionArr);
    }
  }


  dupliacteEntry(componentName){
    this.presentLoading();
    if(componentName =='mangel'){
      this.inspectionArr.push(this.mangel);
      this.mangel={'title':'','description':'','service_provider':'','action':'','cost_by':'','location':'','image':''};
    }
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.content.scrollToTop(0);
    console.log('Loading dismissed!');
  }



  async goToRoom() {
    // this.roomComponent[0].inspection.push(this.inspectionArr);
    // this.storage.set('Korridor',this.roomComponent);
    const loading = await this.loadingController.create({
      message: 'Please Wait..',
      duration: 500
    });
    await loading.present();
    this.storage.set('Korridor',this.roomComponent);
    this.router.navigate(['/rooms']);

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }





  async addNewComponent(Header) {
    const alert = await this.alertController.create({
      header: Header,
      inputs: [
      {
        name: 'Component',
        type: 'text',
        placeholder: 'Enter New Component Name Here!'
      }],
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Save',
        handler: (alertData) => {
          console.log('Confirm Okay');
          var appendComponent = {'name':alertData.Component,'complete':false,'inspection':[]};
          if(alertData.Component)
          this.roomComponent.push(appendComponent);
        }
      }
      ]
    });

    await alert.present();
  }



  slides = [
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  ];
}
