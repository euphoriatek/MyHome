import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { SimpleService } from '../api/simple-service.service';

@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.page.html',
	styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

	roomCard:any=[];
	isCancel:any=false;
	data:any;
	doneComponent:any;
	isComplete:any=false;;

	constructor(private route: ActivatedRoute,
		private storage: Storage,
		public loadingController: LoadingController,
		private router: Router,
		public service:SimpleService) {	
		this.service.hideLoader();	
	}



	ngOnInit() {
		this.roomCard = [
		{
			'title':'Korridor 1',
			'name':'',
			'component':'',
			'done':0,
			'complete':false

		},
		{
			'title':'Korridor 2',
			'name':'1 Mängel',
			'done':0,
			'component':'11',
			'complete':false

		},
		{
			'title':'Korridor 3',
			'name':'1 Mängel',
			'done':0,
			'component':'11',
			'complete':false

		},
		{
			'title':'Korridor 4',
			'name':'1 Mängel',
			'done':0,
			'component':'11',
			'complete':false

		},
		{
			'title':'Korridor 5',
			'name':'1 Mängel',
			'done':0,
			'component':'11',
			'complete':false

		}]
	}

	ionViewWillEnter(){
		this.storage.get('Korridor').then((val) => {
			if(val){
				this.roomCard[0].component = val.length;
				var doneComp=0;
				var isCompleteComponent=0;
				for (var i = 0; i < val.length; ++i) {
					if(val[i].complete){
						doneComp++;
					} else {
						isCompleteComponent++;
					}
				} if(isCompleteComponent == 0){
					this.roomCard[0].complete = true;
				}
				this.roomCard[0].done = doneComp;
			}
		});

		this.storage.get('addRoom').then((val) => {
			if(val)
				this.roomCard.push(val);
			this.isCancel=false;
			this.storage.set('addRoom', '');
		});
	}


	async presentLoading() {
		const loading = await this.loadingController.create({
			message: 'Please Wait..',
			duration: 500
		});
		await loading.present();
		this.router.navigate(['/room-object']);

		const { role, data } = await loading.onDidDismiss();
		console.log('Loading dismissed!');
	}


	editClick(){
		this.isCancel = !this.isCancel;
	}

	eraseRoom(indexOfArr:any){
		this.roomCard.splice(indexOfArr,1);
	}

}
