import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.page.html',
	styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

	roomCard:any=[];
	isCancel:any=false;
	data:any;

	constructor(private route: ActivatedRoute,
		private storage: Storage,
		public loadingController: LoadingController,
		private router: Router) {		
	}



	ngOnInit() {
		this.roomCard = [
		{
			'title':'Korridor 1',
			'name':'',
			'component':'',
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
