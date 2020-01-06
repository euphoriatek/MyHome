import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SimpleService } from '../api/simple-service.service';


@Component({
	selector: 'app-miscellaneous-dropdown',
	templateUrl: './miscellaneous-dropdown.page.html',
	styleUrls: ['./miscellaneous-dropdown.page.scss'],
})
export class MiscellaneousDropdownPage implements OnInit {
	
	protocol:any;
	manualProtocol:any='';
	getIndex:any;
	isManual:any=false;
	keyDirectoryArray:any=[];
	miscellaneousGeneralList:any=[];
	
	constructor(private route: ActivatedRoute, private router: Router,private storage: Storage,public service:SimpleService) { 
		this.route.queryParams.subscribe(params => {
			if (params && params.indexOf) {
				this.getIndex = JSON.parse(params.indexOf);
			}
		});
	}
	
	ngOnInit() {
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
	
	goTomiscellaneous(){
		if(this.protocol){
			if(this.protocol == 'manualProtocol'){
				this.service.showLoader('Please Wait...');
				var indexOfVar = this.getIndex.index;
				if(this.getIndex.type == 'Key'){
					this.keyDirectoryArray[indexOfVar].key_value=this.manualProtocol;
					this.storage.set('KeyList',this.keyDirectoryArray);
					setTimeout(() => {
						this.getIndex = '';
						this.manualProtocol = '';
						this.isManual = false;
						this.router.navigate(['/miscellaneous']);
					}, 1000);
				} else {
					this.miscellaneousGeneralList[indexOfVar].key_value=this.manualProtocol;
					this.storage.set('miscellaneousGeneralList',this.miscellaneousGeneralList);
					setTimeout(() => {
						this.getIndex = '';
						this.manualProtocol = '';
						this.isManual = false;
						this.router.navigate(['/miscellaneous']);
					}, 1000);
				}
			} else {
				this.service.showLoader('Please Wait...');
				var indexOfVar = this.getIndex.index;
				if(this.getIndex.type == 'Key'){
					this.keyDirectoryArray[indexOfVar].key_value=this.protocol;
					this.storage.set('KeyList',this.keyDirectoryArray);
					setTimeout(() => {
						this.getIndex = '';
						this.protocol = '';
						this.router.navigate(['/miscellaneous']);
					}, 1000);
				} else {
					this.miscellaneousGeneralList[indexOfVar].key_value=this.protocol;
					this.storage.set('miscellaneousGeneralList',this.miscellaneousGeneralList);
					setTimeout(() => {
						this.getIndex = '';
						this.protocol = '';
						this.router.navigate(['/miscellaneous']);
					}, 1000);
				}
			}
			
		}
	}
	
}
