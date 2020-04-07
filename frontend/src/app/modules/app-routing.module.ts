import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from '../play/play.component';
import { LobbyComponent } from '../lobby/lobby.component';


const routes: Routes = [
  { path: 'play', component: PlayComponent },
  { path: '', component: LobbyComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
