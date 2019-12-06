import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

	roomCard:any=[];
	isCancel:any=false;

  constructor() { }

  ngOnInit() {
  	this.roomCard = [
  	{
  		'title':'Korridor',
  		'name':'1 Mängel',
  		'component':'11/11 Bauteile',
  		'complete':false

  	},
  	{
  		'title':'Korridor',
  		'name':'1 Mängel',
  		'component':'11/11 Bauteile',
  		'complete':true

  	},
  	{
  		'title':'Korridor',
  		'name':'1 Mängel',
  		'component':'11/11 Bauteile',
  		'complete':false

  	},
  	{
  		'title':'Korridor',
  		'name':'1 Mängel',
  		'component':'11/11 Bauteile',
  		'complete':true

  	},
  	{
  		'title':'Korridor',
  		'name':'1 Mängel',
  		'component':'11/11 Bauteile',
  		'complete':false

  	}]
  }


  editClick(){
  	this.isCancel = !this.isCancel;
  }

  eraseRoom(indexOfArr){
  	this.roomCard.pop(indexOfArr);
  }

}
