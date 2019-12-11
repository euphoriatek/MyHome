import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';

import { IonicModule } from '@ionic/angular';

import { ConclusionPageRoutingModule } from './conclusion-routing.module';

import { ConclusionPage } from './conclusion.page';
// import { ModalPageModule } from '../modal/modal.module';

@NgModule({
	entryComponents: [],
	imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	SignaturePadModule,
	ConclusionPageRoutingModule
	],
	declarations: [ConclusionPage]
})
export class ConclusionPageModule {}
