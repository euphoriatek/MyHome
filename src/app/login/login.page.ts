import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../api/simple-service.service';
import { AuthService } from '../api/auth.service';
import { Router,NavigationExtras} from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginAuth:any;
  userInfo:any={'email':'','password':''};
  isRemeberMe:any=false;
  
  constructor(private router: Router,public service:SimpleService,public apiService:AuthService,public storage:Storage) { }
  
  ngOnInit() {
    this.storage.get('loginDetail').then((val) => {
      if(val.access_token){}
      this.router.navigate(['/home']);
    });
  }

  changeValue(){
    this.isRemeberMe = !this.isRemeberMe;
  }
  
  gotoHome(){
    this.service.showLoader('Please Wait...');
    setTimeout(() => {
      this.userSignIn();
    }, 1000);
    
  }
  
  userSignIn(){
    if(this.userInfo.email == ''){
      this.service.hideLoader();
      this.service.presentAlertWithSingle("Email is required!");
      this.service.hideLoader();
    } else if(this.userInfo.password == ''){
      this.service.hideLoader();
      this.service.presentAlertWithSingle("Password is required!");
    } else {
      if(this.isRemeberMe){
        this.storage.set('loginCred',this.userInfo);
      }
      this.apiService.userLogin(this.userInfo).subscribe(result => {
        this.service.hideLoader();
        this.loginAuth = result;
        this.storage.set('loginDetail',result);
        this.router.navigate(['/home']);
      },error =>{
        this.service.hideLoader();
        console.log(error);
        this.service.presentAlertWithSingle(error.error.message);
      });
    }
    
  }
  
}
