    import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'parties',
    loadChildren: () => import('./parties/parties.module').then( m => m.PartiesPageModule)
  },
  {
    path: 'miscellaneous',
    loadChildren: () => import('./miscellaneous/miscellaneous.module').then( m => m.MiscellaneousPageModule)
  },
  {
    path: 'conclusion',
    loadChildren: () => import('./conclusion/conclusion.module').then( m => m.ConclusionPageModule)
  },
  {
    path: 'room-create-request',
    loadChildren: () => import('./room-create-request/room-create-request.module').then( m => m.RoomCreateRequestPageModule)
  },
  {
    path: 'rooms-subdropdown',
    loadChildren: () => import('./rooms-subdropdown/rooms-subdropdown.module').then( m => m.RoomsSubdropdownPageModule)
  },
  {
    path: 'new-protocol',
    loadChildren: () => import('./new-protocol/new-protocol.module').then( m => m.NewProtocolPageModule)
  },
  {
    path: 'miscellaneous-dropdown',
    loadChildren: () => import('./miscellaneous-dropdown/miscellaneous-dropdown.module').then( m => m.MiscellaneousDropdownPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'add-room',
    loadChildren: () => import('./add-room/add-room.module').then( m => m.AddRoomPageModule)
  },
  {
    path: 'room-object',
    loadChildren: () => import('./room-object/room-object.module').then( m => m.RoomObjectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
