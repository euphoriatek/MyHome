import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { IonicModule } from '@ionic/angular';

import { RoomObjectPageRoutingModule } from './room-object-routing.module';

import { RoomObjectPage } from './room-object.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
    IonicModule,
    RoomObjectPageRoutingModule
  ],
  declarations: [RoomObjectPage]
})
export class RoomObjectPageModule {}
