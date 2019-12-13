import { Component, OnInit } from '@angular/core';
import {SimpleService} from '../api/simple-service.service';
import { Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,public service:SimpleService) { }

  ngOnInit() {
  }

  gotoHome(){
  	this.service.showLoader();
  	setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  	
  }

}
