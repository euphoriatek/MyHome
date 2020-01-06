import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
import { Storage } from '@ionic/storage';
import { SimpleService } from '../api/simple-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
	roomName:any;
  roomType:any;
  roomTypeData:any=[];
  roomComponentData:any=[];


  constructor(private router: Router,private storage: Storage,public service:SimpleService,public alertController: AlertController) { }

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

  ionViewWillEnter(){
    this.storage.get('roomTypeData').then((val) => {
			if(val){
        this.roomTypeData = val;
      }
    });
    
    this.storage.get('roomComponentData').then((val) => {
			if(val){
        this.roomComponentData = val;
      }
		});
  }

  async addNewRoomType(){
    if(this.roomType == 'new'){
      this.roomType = '';
      const alert = await this.alertController.create({
        header: 'Room Type',
        inputs: [
        {
          name: 'Room_Type',
          type: 'text',
          placeholder: 'Enter New Room Type Here!'
        }],
        buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Save',
          handler: (alertData) => {
            console.log('Confirm Okay');
            this.roomType = alertData.Room_Type;
            var appendRoomType = {"id":"","name":alertData.Room_Type,"unique_number":"RT15","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"};
            if(alertData.Room_Type)
            this.roomTypeData.push(appendRoomType);
          }
        }
        ]
      });
  
      await alert.present();
    }
    
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
    if(this.roomName)
    this.storage.set('addRoom', roomDetails);
    this.roomName='';
    this.roomType='';
  	this.router.navigate(['/rooms']);
  }
}
