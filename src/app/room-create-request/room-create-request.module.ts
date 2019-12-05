import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomCreateRequestPageRoutingModule } from './room-create-request-routing.module';

import { RoomCreateRequestPage } from './room-create-request.page';

import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomCreateRequestPageRoutingModule,
    OwlModule
  ],
  declarations: [RoomCreateRequestPage]
})
export class RoomCreateRequestPageModule {}
