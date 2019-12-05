import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-room-create-request',
  templateUrl: './room-create-request.page.html',
  styleUrls: ['./room-create-request.page.scss'],
})



export class RoomCreateRequestPage implements OnInit {
  @ViewChild('owlElement',{'static':false}) owlElement: OwlCarousel

  constructor() { }

  ngOnInit() {
    
  }
  slides = [
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
    {img: "./assets/images/living-room.jpg"},
  ];
}
