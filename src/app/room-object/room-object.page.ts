import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
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
  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor() { }

  ngOnInit() {
  }

  openSliderContent(){
    this.openslider =  true;
  }

  closeSliderContent(){
    this.openslider =  false;
    this.isShared = false;
  }

  //for outside click event
  onClick(event){
  }

  openInfoSlider(infoSlideName){
    this.openInfoSlide = true;
    this.isShared = false;
    this.sybTabName = infoSlideName;
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
