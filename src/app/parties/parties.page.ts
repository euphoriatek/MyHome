import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SimpleService} from '../api/simple-service.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {
  public labelAttribute:string;
  isShowUnit:any;
  isDisabled:any=false;
  isDisabledHouse:any=false;

  public autoFillData:any[];
  constructor(private router: Router, public SimpleService:SimpleService) {
    const autoFillData = [
      "Unit One", "Unit Two", "Unit Three", "Unit Four", "Unit Five", "Unit Six"
    ]
   }

  ngOnInit() {
    this.SimpleService.hideLoader();
  }

  goTomiscellaneous(){
    this.router.navigate(['/miscellaneous'])
  }

  removedMethod(getRemoved:any){
    this.isShowUnit='';
  }

  goToConclusion(){
    this.router.navigate(['/conclusion'])
  }

 protected filter(keyword) {
    keyword = keyword.toLowerCase();

    return this.autoFillData.filter(
      (object) => {
        const value = object[this.labelAttribute].toLowerCase();

        return value.includes(keyword);
      }
    );
  }

 






}
