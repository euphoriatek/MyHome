import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isHide:any=false;

  cardBox = [
    {name:'Handover',subname:'',bgClass:"primaryBg", active:false},
    {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false},
    {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false},
    {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false},
    {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false},
    {name:'Construction',subname:'control II',bgClass:"secondaryBg", active:false},
  ];

  constructor(private router: Router) {}

  goToProtocol(){
  	this.router.navigate(['/new-protocol'])
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
