import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousDropdownPageRoutingModule } from './miscellaneous-dropdown-routing.module';

import { MiscellaneousDropdownPage } from './miscellaneous-dropdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscellaneousDropdownPageRoutingModule
  ],
  declarations: [MiscellaneousDropdownPage]
})
export class MiscellaneousDropdownPageModule {}
