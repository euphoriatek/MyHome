import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-room-object',
  templateUrl: './room-object.page.html',
  styleUrls: ['./room-object.page.scss'],
})
export class RoomObjectPage implements OnInit {
  activeTabName:any='okay';
  openslider:any=false;
  openInfoSlide:any=false;
  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor() { }

  ngOnInit() {
  }

  openSliderContent(){
    this.openslider =  true;
  }

  closeSliderContent(){
    this.openslider =  false;
  }

  openInfoSlider(){
    this.openInfoSlide = true;
  }
  closeInfoSlider(){
    this.openInfoSlide = false;
  }
  slides = [
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
  ];
}
