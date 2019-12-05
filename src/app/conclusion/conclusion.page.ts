import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.page.html',
  styleUrls: ['./conclusion.page.scss'],
})
export class ConclusionPage implements OnInit {

  constructor(private router: Router,private datePicker: DatePicker) { }

  ngOnInit() {

  }

  goTomiscellaneous(){
    this.router.navigate(['/miscellaneous'])
  }
  datePick(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
