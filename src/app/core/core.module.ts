import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../common/modules/material.module';
import { SampleCommonModule } from '../common/modules/sample-common.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [
    CorePageComponent,
  ],
  imports: [
    MaterialModule,
    SampleCommonModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }