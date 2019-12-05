import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.page.html',
  styleUrls: ['./new-protocol.page.scss'],
})
export class NewProtocolPage implements OnInit {
  protocol:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToParties(){
    console.log("this is selected value of protocol "+this.protocol);
    this.router.navigate(['/parties']);
  }

}
