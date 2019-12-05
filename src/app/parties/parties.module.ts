import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartiesPageRoutingModule } from './parties-routing.module';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { PartiesPage } from './parties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompleteModule,
    PartiesPageRoutingModule
  ],
  declarations: [PartiesPage]
})
export class PartiesPageModule {}
