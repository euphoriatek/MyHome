import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { Storage } from '@ionic/storage';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-room-object',
  templateUrl: './room-object.page.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
  styleUrls: ['./room-object.page.scss'],
})
export class RoomObjectPage implements OnInit {
  activeTabName:any='okay';
  openslider:any=false;
  sybTabName:any;
  isShared:any=false;
  openInfoSlide:any=false;
  costby:any;
  roomComponent:any;
  currentComponent:any;
  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor(private storage: Storage,public loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
    this.storage.get('Korridor').then((val) => {
      if(val){
        this.roomComponent = val;
      }
    });
  }

  openSliderContent(componentIndex){
    this.currentComponent = componentIndex;
    this.openslider =  true;
  }

  closeSliderContent(){
    this.openslider =  false;
    this.isShared = false;
    this.costby = '';
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
  closeInfoSlider(){
    this.openInfoSlide = false;
  }

  gofurther(componentIndex){
    this.roomComponent[componentIndex].complete=true;
    this.openslider = false;
  }



  async goToRoom() {
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
