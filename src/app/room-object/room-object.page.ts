import { Component, OnInit,ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-room-object',
  templateUrl: './room-object.page.html',
  styleUrls: ['./room-object.page.scss'],
})
export class RoomObjectPage implements OnInit {
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
