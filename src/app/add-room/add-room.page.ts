import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
	roomName:any;
	roomType:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    const ionSelects = document.querySelectorAll('ion-select');
    ionSelects.forEach((sel) => {
      sel.shadowRoot.querySelectorAll('.select-icon-inner')
        .forEach((elem) => {
          elem.setAttribute('style', 'display: none;');
        });
    });
  }

  goToRoomsPage(){
  	console.log("this is value "+this.roomName,this.roomType);
  	var roomDetails=
  		{
			'title':this.roomName,
			'name':this.roomType,
			'component':'11/11 Bauteile',
			'complete':false

		}
  	// this.storage.set('addRoom', roomDetails);
  	this.router.navigate(['/rooms']);
  }
  
}
