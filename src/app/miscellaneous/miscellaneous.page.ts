import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.page.html',
  styleUrls: ['./miscellaneous.page.scss'],
})
export class MiscellaneousPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToConclusion(){
    this.router.navigate(['/conclusion'])
  }

 

}
