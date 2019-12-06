import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.page.html',
	styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

	roomCard:any=[];
	isCancel:any=false;
	data:any;

	constructor(private route: ActivatedRoute,private storage: Storage) {		
	}



	ngOnInit() {
		this.roomCard = [
		{
			'title':'Korridor 1',
			'name':'1 Mängel',
			'component':'11/11 Bauteile',
			'complete':false

		},
		{
			'title':'Korridor 2',
			'name':'1 Mängel',
			'component':'11/11 Bauteile',
			'complete':true

		},
		{
			'title':'Korridor 3',
			'name':'1 Mängel',
			'component':'11/11 Bauteile',
			'complete':false

		},
		{
			'title':'Korridor 4',
			'name':'1 Mängel',
			'component':'11/11 Bauteile',
			'complete':true

		},
		{
			'title':'Korridor 5',
			'name':'1 Mängel',
			'component':'11/11 Bauteile',
			'complete':false

		}]
	}

	ionViewWillEnter(){
		this.storage.get('addRoom').then((val) => {
			console.log('Your age is', val);
			if(val)
				this.roomCard.push(val);
			this.storage.set('addRoom', '');
		});
	}


	editClick(){
		this.isCancel = !this.isCancel;
	}

	eraseRoom(indexOfArr){
		this.roomCard.splice(indexOfArr,1);
	}

}
