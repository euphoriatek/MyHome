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
  isNewRoomType:any=false;
  
  
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

  checkedComponent(indexOf){
    if(this.isNewRoomType){
      this.roomComponentData[indexOf].checked = true;
    }
  }
  
  async addNewRoomType(){
    if(this.roomType == 'new'){
      this.isNewRoomType = true;
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
                var roomTypId = JSON.stringify(this.roomTypeData.length+1);
                var appendRoomType = {"id":roomTypId,"name":alertData.Room_Type,"unique_number":"RT15","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"};
                if(alertData.Room_Type)
                setTimeout(()=>{
                  this.roomTypeData.push(appendRoomType);
                  this.roomType = JSON.stringify(this.roomTypeData.length);
                  debugger;
                },100)
              }
            }
          ]
        });
        
        await alert.present();
      } else {
        this.isNewRoomType = true;
        var firstIndexArr = [];
        var anotherIndexArr = [];
        for (var i = 0; i < this.roomComponentData.length ;i++) {
          var isRoomTypeIdExist = false;
          if(this.roomComponentData[i].room_type_component.length>0){
            for (var index = 0; index < this.roomComponentData[i].room_type_component.length; index++) {
              if(this.roomType == this.roomComponentData[i].room_type_component[index]){
                isRoomTypeIdExist = true;
              }
            }
            if(isRoomTypeIdExist){
              this.roomComponentData[i].checked = true;
              firstIndexArr.push(this.roomComponentData[i]);
            } else {
              this.roomComponentData[i].checked = false;
              anotherIndexArr.push(this.roomComponentData[i]);
            }
          } else {
            this.roomComponentData[i].checked = false;
            anotherIndexArr.push(this.roomComponentData[i]);
          }
          
        }
        setTimeout(()=>{
          this.roomComponentData=[];
          this.roomComponentData = firstIndexArr.concat(anotherIndexArr);
        },100)
        
      }
      
    }


    async addNewComponent(Header) {
      const alert = await this.alertController.create({
        header: Header,
        inputs: [
        {
          name: 'Component',
          type: 'text',
          placeholder: 'Enter New Component Name Here!'
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
            var appendComponent = {"checked":false,"id":"1","name":alertData.Component,"unique_number":"BA01","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","room_type_component":[]};
            if(alertData.Component)
            this.roomComponentData.push(appendComponent);
          }
        }
        ]
      });
  
      await alert.present();
    }
    
    
    goToRoomsPage(){
      console.log("this is value "+this.roomName,this.roomType);
      var componentCount=0;
      for(var i = 0; i < this.roomComponentData.length ;i++){
        if(this.roomComponentData[i].checked){
          componentCount++;
        }
      }
      debugger;
      var roomDetails={"done":0,"component":componentCount,"complete":false,"room_inspection_flag":"","id":"9","name":this.roomName,"unique_number":"RA09","room_type":this.roomType,"created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"}
      if(this.roomName)
      this.storage.set('addRoom', roomDetails);
      this.roomName='';
      this.roomType='';
      this.router.navigate(['/rooms']);
    }
  }
  