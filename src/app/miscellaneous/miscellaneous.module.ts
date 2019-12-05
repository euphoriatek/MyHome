import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousPageRoutingModule } from './miscellaneous-routing.module';

import { MiscellaneousPage } from './miscellaneous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousPageRoutingModule
  ],
  declarations: [MiscellaneousPage]
})
export class MiscellaneousPageModule {}
