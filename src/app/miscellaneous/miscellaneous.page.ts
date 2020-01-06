import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras  } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SimpleService } from '../api/simple-service.service';

@Component({
	selector: 'app-miscellaneous',
	templateUrl: './miscellaneous.page.html',
	styleUrls: ['./miscellaneous.page.scss'],
})
export class MiscellaneousPage implements OnInit {
	keyDirectoryArray:any=[];
	miscellaneousGeneralList:any=[];


	constructor(private router: Router,private storage: Storage,public service:SimpleService) { }

	ngOnInit() {
		this.service.hideLoader();
		this.storage.get('KeyList').then((val) => {
			if(val){
				this.keyDirectoryArray = val;
			}
		});

		this.storage.get('miscellaneousGeneralList').then((val) => {
			if(val){
				this.miscellaneousGeneralList = val;
			}
		});
	}

	goToConclusion(){
		this.router.navigate(['/conclusion'])
	}

	ionViewWillEnter(){
		this.keyDirectoryArray = [];
		this.miscellaneousGeneralList=[];
		this.service.hideLoader();
		this.storage.get('KeyList').then((val) => {
			if(val){
				this.keyDirectoryArray = val;
			}
		});
		this.storage.get('miscellaneousGeneralList').then((val) => {
			if(val){
				this.miscellaneousGeneralList = val;
			}
		});
	}

	goToDropDown(index,type){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				indexOf: JSON.stringify({'index':index,'type':type})
			}
		};
		this.router.navigate(['/miscellaneous-dropdown'], navigationExtras);
	}



}
