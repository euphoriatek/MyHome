import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private storage: Storage
        ) {
        this.initializeApp();
        var roomObjects = [
        {'name':'Boden','complete':false,'inspection':[]},
        {'name':'Wände','complete':false,'inspection':[]},
        {'name':'Schränke / Garderobe','complete':false,'inspection':[]},
        {'name':'Sicherungskasten','complete':false,'inspection':[]},
        {'name':'Wohnungstüre / Schloss','complete':false,'inspection':[]},
        {'name':'Türzarge','complete':false,'inspection':[]},
        {'name':'Türöffner / Gegensprechanlage','complete':false,'inspection':[]},
        {'name':'Lichtschalter / Steckdose','complete':false,'inspection':[]},
        {'name':'Beleuchtung','complete':false,'inspection':[]},
        {'name':'Manuell','complete':false,'inspection':[]},
        ]

        var protocol = [
        {'name':'Bauphase','title':'Bauphase'},
        {'name':'Rohbauabnahme','title':'Rohbauabnahme'},
        {'name':'Vorabnahme','title':'Vorabnahme'},
        {'name':'Bauabnahme','title':'Bauabnahme'},
        {'name':'Abnahme','title':'Abnahme'},
        {'name':'Übergabe','title':'Übergabe'}
        ]

        var residentUser = [
        {'name':'Rajesh Kumar'},
        {'name':'Satyam Gupta'},
        {'name':'Mayank Verma'},
        {'name':'Tarun Malviya'},
        {'name':'Mayank Mehta'},
        {'name':'Sourav Agarawal'},
        {'name':'Sachin Gangrade'},
        {'name':'Lakhan Thakur'},
        {'name':'Sharad Shonkar'},
        {'name':'Mayuri Situt'},
        {'name':'Ayushi Sharma'},
        {'name':'Mayank Sahu'}
        ]

        var unitData = [
        {'name':'Unit 1'},
        {'name':'Unit 2'},
        {'name':'Unit 3'},
        {'name':'Unit 4'},
        {'name':'Unit 5'},
        {'name':'Unit 6'},
        {'name':'Unit 7'},
        {'name':'Unit 8'},
        {'name':'Unit 9'},
        {'name':'Unit 10'},
        {'name':'Unit 11'},
        {'name':'Unit 12'}
        ]


        var keyDirectoryArray=[
        {'key_name':'Apartment door','key_value':''},
        {'key_name':'Transmitter underground garage','key_value':''},
        {'key_name':'Office and commercialr','key_value':''},
        {'key_name':'Storeroom','key_value':''},
        {'key_name':'Transmitter','key_value':''}
        ]

        var General=[
        {'key_name':'Oven tray','key_value':''},
        {'key_name':'Oven grid','key_value':''},
        {'key_name':'Information brochure','key_value':''}
        ]

        var cardBox = [
        {name:'Handover',subname:'',bgClass:"primaryBg", active:false, isChecked:false},
        {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
        {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
        {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
        {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
        {name:'Construction',subname:'control II',bgClass:"secondaryBg", active:false,isChecked:false},
        ];

        this.storage.set('protocolList',protocol);
        this.storage.set('Korridor',roomObjects);
        this.storage.set('inResidentUser',residentUser);
        this.storage.set('unitList',unitData);
        this.storage.set('hometiles',cardBox);
        this.storage.set('miscellaneousList',keyDirectoryArray);
        this.storage.set('miscellaneousGeneralList',General);

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
