import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsSubdropdownPageRoutingModule } from './rooms-subdropdown-routing.module';

import { RoomsSubdropdownPage } from './rooms-subdropdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsSubdropdownPageRoutingModule
  ],
  declarations: [RoomsSubdropdownPage]
})
export class RoomsSubdropdownPageModule {}
