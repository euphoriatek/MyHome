import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomCreateRequestPage } from './room-create-request.page';

const routes: Routes = [
  {
    path: '',
    component: RoomCreateRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomCreateRequestPageRoutingModule {}
