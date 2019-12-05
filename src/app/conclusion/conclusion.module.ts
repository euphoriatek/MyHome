import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConclusionPageRoutingModule } from './conclusion-routing.module';

import { ConclusionPage } from './conclusion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConclusionPageRoutingModule
  ],
  declarations: [ConclusionPage]
})
export class ConclusionPageModule {}
