import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from "./timer/timer.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'timer',
    component: TimerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
