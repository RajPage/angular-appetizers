import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '@base/shared/shared.module';

import { MaterialModule } from '@base/app/material.module';
import { TimerComponent } from './timer/timer.component';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    HomeComponent,
    TimerComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
