import { Component, OnInit,ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { Storage } from '@ionic/storage';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { LoadingController,IonContent } from '@ionic/angular';
import { SimpleService } from '../api/simple-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor(
    private storage: Storage,
    public loadingController: LoadingController,
    private router: Router,
    private camera: Camera,
    public service:SimpleService) { }

  ngOnInit() {
    this.storage.get('Korridor').then((val) => {
      if(val){
        this.roomComponent = val;
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
    this.openInfoSlide = false;
  }

  gofurther(componentIndex,componentName){
    this.costbyprotocol='';
    this.actionprotocol='';
    this.service.showLoader('Please Wait...');
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
    if(componentName!='okay'){

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
    this.roomComponent[0].inspection.push(this.inspectionArr);
    this.storage.set('Korridor',this.roomComponent);
    const loading = await this.loadingController.create({
      message: 'Please Wait..',
      duration: 500
    });
    await loading.present();
    this.router.navigate(['/rooms']);

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



  slides = [
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  {img: "./assets/images/living-room.jpg"},
  ];
}
