import { NgModule } from '@angular/core';
import { SampleCommonModule } from '../common/modules/sample-common.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  declarations: [
    CorePageComponent,
  ],
  imports: [
    SampleCommonModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }