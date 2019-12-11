import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignaturePadModule } from 'angular2-signaturepad';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadModule,
    ModalPageRoutingModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
