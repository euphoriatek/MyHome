import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {SimpleService} from '../api/simple-service.service';

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



  cardBox = [
  {name:'Handover',subname:'',bgClass:"primaryBg", active:false, isChecked:false},
  {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
  {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
  {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
  {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
  {name:'Construction',subname:'control II',bgClass:"secondaryBg", active:false,isChecked:false},
  ];

  constructor(private router: Router,private storage: Storage,public service:SimpleService) {
    var roomObjects = [{'name':'Boden','complete':false,'inspection':[]},
        {'name':'Wände','complete':false,'inspection':''},
        {'name':'Schränke / Garderobe','complete':false,'inspection':[]},
        {'name':'Sicherungskasten','complete':false,'inspection':[]},
        {'name':'Wohnungstüre / Schloss','complete':false,'inspection':[]},
        {'name':'Türzarge','complete':false,'inspection':[]},
        {'name':'Türöffner / Gegensprechanlage','complete':false,'inspection':[]},
        {'name':'Lichtschalter / Steckdose','complete':false,'inspection':[]},
        {'name':'Beleuchtung','complete':false,'inspection':[]},
        {'name':'Manuell','complete':false,'inspection':[]},
    ]

    
    this.storage.set('Korridor',roomObjects);
    this.service.hideLoader();
  }


  ngOnInit() {
  }

  goToProtocol(){
  	this.router.navigate(['/new-protocol'])
  }

  changeClass(){
    debugger;
    this.classVariable = 'opacityShow';
  }

  allSelected(){
    this.isSelectAll=!this.isSelectAll;
    if(this.isSelectAll){
      for (var i = 0; i < this.cardBox.length; ++i) {
        this.cardBox[i].isChecked=true;
      }
    } else {
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
