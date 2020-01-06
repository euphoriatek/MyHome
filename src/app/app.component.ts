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
            
            var General=
            
            [
                {"id":"1","name":"oven_tray","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"2","name":"oven_grill","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"3","name":"information_brochure","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"4","name":"reserve_plates","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"5","name":"reserve_parquet","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''}
            ]
            
            var cardBox = [
                {name:'Handover',subname:'',bgClass:"primaryBg", active:false, isChecked:false},
                {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
                {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
                {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
                {name:'Construction',subname:'control I',bgClass:"primaryBg", active:false,isChecked:false},
                {name:'Construction',subname:'control II',bgClass:"secondaryBg", active:false,isChecked:false},
            ];
            
            var roomType = [
                {"id":"1","name":"corridor","unique_number":"RT01","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"2","name":"kitchen","unique_number":"RT02","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"3","name":"living_dining_room","unique_number":"RT03","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"4","name":"balcony","unique_number":"RT04","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"5","name":"bedroom","unique_number":"RT05","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"6","name":"zimmer","unique_number":"RT06","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"7","name":"bath_wc","unique_number":"RT07","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"8","name":"shower_wc","unique_number":"RT08","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"9","name":"washing","unique_number":"RT09","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"10","name":"reduction","unique_number":"RT10","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"11","name":"cellar","unique_number":"RT11","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"12","name":"additional_cellar","unique_number":"RT12","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"13","name":"parking","unique_number":"RT13","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"14","name":"room","unique_number":"RT14","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"15","name":"wc","unique_number":"RT15","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"}
            ];
            
            var roomTypeComponent = 
            [
                {"id":"1","name":"floor","unique_number":"BA01","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"2","name":"walls","unique_number":"BA02","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"3","name":"ceiling","unique_number":"BA03","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"4","name":"wardrobe","unique_number":"BA04","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"5","name":"fuse_box","unique_number":"BA05","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"6","name":"apartment_door_lock","unique_number":"BA06","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"7","name":"door_frame","unique_number":"BA07","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"8","name":"door_opener_intercom","unique_number":"BA08","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"9","name":"light_switch_socket","unique_number":"BA09","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"10","name":"lighting","unique_number":"BA10","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"11","name":"wall_panels","unique_number":"BA11","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"12","name":"paint","unique_number":"BA12","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"13","name":"window","unique_number":"BA13","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"14","name":"sims","unique_number":"BA14","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"15","name":"sun_protection","unique_number":"BA15","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"16","name":"curtain_rail","unique_number":"BA16","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"17","name":"cover","unique_number":"BA17","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"18","name":"cupboards_drawer","unique_number":"BA18","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"19","name":"kitchen_front","unique_number":"BA19","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"20","name":"flushing_trough","unique_number":"BA20","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"21","name":"valve","unique_number":"BA21","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"22","name":"cooking hob","unique_number":"BA22","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"23","name":"fume_cupboard_filter","unique_number":"BA23","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"24","name":"oven_steamer","unique_number":"BA24","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"25","name":"dishwasher","unique_number":"BA25","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"26","name":"refrigerator_freezer","unique_number":"BA26","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"27","name":"waste_element","unique_number":"BA27","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"28","name":"swedish_stove","unique_number":"BA28","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"29","name":"light_switch_socket_multimedia","unique_number":"BA29","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"30","name":"door","unique_number":"BA30","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"31","name":"railing","unique_number":"BA31","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"32","name":"crank_gear","unique_number":"BA32","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"33","name":"lighting_socket","unique_number":"BA33","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"34","name":"toilet","unique_number":"BA34","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"35","name":"paper_holder","unique_number":"BA35","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"36","name":"bathtub","unique_number":"BA36","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"37","name":"shower_hose","unique_number":"BA37","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"38","name":"hand_towel_rail","unique_number":"BA38","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"39","name":"sink","unique_number":"BA39","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"40","name":"both_towel_rail","unique_number":"BA40","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"41","name":"mirror_cabinet_light","unique_number":"BA41","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"42","name":"ventilation_filter","unique_number":"BA42","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"43","name":"towel_radiator","unique_number":"BA43","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"44","name":"shower","unique_number":"BA44","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"45","name":"partition_wall","unique_number":"BA45","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"46","name":"washing_machine","unique_number":"BA46","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"47","name":"dryer","unique_number":"BA47","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"48","name":"supply_line","unique_number":"BA48","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"49","name":"mirror","unique_number":"BA49","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"50","name":"handle","unique_number":"BA50","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"51","name":"buttons","unique_number":"BA51","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"52","name":"display","unique_number":"BA52","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"}
            ];
            
            var protocolTypes = 
            [
                {"id":"1","name":"construction_inspection","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"2","name":"preliminary_acceptance","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"3","name":"building_inspection","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"4","name":"handover","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"},
                {"id":"5","name":"acceptance","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13"}
            ];
            
            var miscKeyList = [
                {"id":"1","name":"apartment_door","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"2","name":"transmitter_underground_car_park","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"3","name":"additional_cellar","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"4","name":"handheld_transmitter","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''},
                {"id":"5","name":"office_and_trade","created_at":"2019-12-28 16:39:13","updated_at":"2019-12-28 16:39:13","key_value":''}
            ]
            
            this.storage.set('protocolList',protocol);
            this.storage.set('Korridor',roomObjects);
            this.storage.set('inResidentUser',residentUser);
            this.storage.set('unitList',unitData);
            this.storage.set('hometiles',cardBox);
            this.storage.set('miscellaneousList',keyDirectoryArray);
            this.storage.set('miscellaneousGeneralList',General);
            this.storage.set('roomTypeData',roomType);
            this.storage.set('roomComponentData',roomTypeComponent);
            this.storage.set('protocolData',protocolTypes);
            this.storage.set('KeyList',miscKeyList); 
        }
        
        initializeApp() {
            this.platform.ready().then(() => {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            });
        }
    }
    