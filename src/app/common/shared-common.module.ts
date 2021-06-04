import { NgModule } from '@angular/core';
import { FormControlSampleComponent } from './components/form-control-sample/form-control-sample.component';
import { MaterialModule } from './modules/material.module';
import { SampleCommonModule } from './modules/sample-common.module';

@NgModule({
  declarations: [
    FormControlSampleComponent
  ],
  imports: [
    MaterialModule,
    SampleCommonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedCommonModule { }
