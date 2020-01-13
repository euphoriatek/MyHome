import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SimpleService } from '../api/simple-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isHide:any=false;
  isEditable:any=false;
  isSelected:any=false;
  isSelectAll:any=false;
  classVariable:any;
  isSynch:false;
  cardBox:any=[];

  constructor(private router: Router,private storage: Storage,public service:SimpleService) {
    this.service.hideLoader();
  }


  ngOnInit() {
    this.storage.get('loginDetail').then((val) => {
      if(val.access_token){
        var expireDate = new Date(val.expires_at);
        if(expireDate <= new Date()){
          this.storage.set('loginDetail','');
          this.router.navigate(['/login'])
        }
      }
    });
    this.service.hideLoader();
    this.storage.get('hometiles').then((val) => {
      if(val){
        this.cardBox = val;
      }
    });
  }

  goToProtocol(){
  	this.router.navigate(['/new-protocol'])
  }

  changeClass(){
    this.classVariable = 'opacityShow';
  }

  allSelected(){
    this.isSelectAll=!this.isSelectAll;
    if(this.isSelectAll){
      for (var i = 0; i < this.cardBox.length; ++i) {
        this.cardBox[i].isChecked=true;
      }
    } else {
      this.isSynch = false;
      for (var i = 0; i < this.cardBox.length; ++i) {
        this.cardBox[i].isChecked=false;
      }
    }
  }

  finishAll(){
    this.isEditable=false;
    this.isSelected=false;
    this.isSelectAll = false;
  }

  editClick(){
    this.isEditable=true;
    this.isSelected=true;
  }

  changeEditValue(){
    this.isHide=!this.isHide;
  }

  synchData(){
    this.service.showLoader('Synching...');
    setTimeout(()=>{
      for (var i = 0; i < this.cardBox.length; ++i) {
        if(this.cardBox[i].isChecked){
           this.cardBox[i].bgClass='secondaryBg';
        }
      }
      this.service.hideLoader();
      this.service.presentAlertWithSingle('Data Synched Successfully!');
      this.isHide=false;
      this.isEditable=false;
      this.isSelected=false;
      this.isSelectAll=false;
      this.isSynch=false;
    },2000)
  }

  toggleClass(item:any,index){
    for (var i = 0; i < this.cardBox.length; ++i) {
      if(i == index){
        item.active = !item.active;
      } else {
        this.cardBox[i].active = false;
      }
    }
  }

  deleteCard(indexOf:any){
    var idx = indexOf;
    this.cardBox.splice(idx, 1);
    
  }

}
