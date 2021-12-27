import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BeatComponent } from './pages/beat/beat.component';
import { HomeComponent } from './pages/home/home.component';
import { MessageComponent } from './pages/message/message.component';
import { RComponent } from './pages/r/r.component';
import { ReasonComponent } from './pages/reason/reason.component';
import { StarComponent } from './pages/star/star.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'beat',component:BeatComponent},
  {path:'message',component:MessageComponent},
  {path:'reason',component:ReasonComponent},
  {path:'about',component:AboutComponent},
  {path:'lover/R',component:RComponent},
  {path:'star',component:StarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
