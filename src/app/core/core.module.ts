import { NgModule } from '@angular/core';
import { SampleCommonModule } from '../common/modules/sample-common.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { FormSampleAComponent } from './components/form-sample/form-sample-a/form-sample-a.component';

@NgModule({
  declarations: [
    CorePageComponent,
    FormSampleAComponent,
  ],
  imports: [
    SampleCommonModule,
    CoreRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }