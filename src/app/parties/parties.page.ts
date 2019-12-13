import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleService } from '../api/simple-service.service';

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
  partiesInfo:any={'moving_in':'','unit':'','moving_out':'','tu_gu':'','house_owner':'Fortimo AG, Rorschacherstrasse 305, 9016 St.Gallen','realstatecompany':'Fortimo AG, Rorschacherstrasse 302, 9016 St.Gallen'}

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

  goToRoom(){
    if(this.partiesInfo.moving_in=='' 
      || this.partiesInfo.unit=='' 
      || this.partiesInfo.moving_out=='' 
      || this.partiesInfo.house_owner=='' 
      || this.partiesInfo.realstatecompany==''){
      this.SimpleService.presentAlertWithSingle('Please fill all the required fields!');
    return;
  } else {
  console.log("this is parties data "+JSON.stringify(this.partiesInfo));
  this.SimpleService.showLoader('Please Wait...');
    setTimeout(() => {
      this.router.navigate(['/rooms']);
    }, 500);
  
  }
}

}
