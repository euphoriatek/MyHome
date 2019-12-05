import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsSubdropdownPage } from './rooms-subdropdown.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsSubdropdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsSubdropdownPageRoutingModule {}
