import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';

import { LoaderComponent } from './components/loader/loader.component';
import { SecsToTimePipe } from './pipes/secs-to-time.pipe';
import { NgxFloatButtonModule } from 'ngx-float-button';

@NgModule({
  declarations: [
    LoaderComponent,
    SecsToTimePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    LoaderComponent,
    SecsToTimePipe,
    NgxFloatButtonModule
  ]
})
export class SharedModule { }
