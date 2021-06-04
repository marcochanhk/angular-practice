import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../common/modules/common-material.module';
import { CoreRoutingModule } from './core-routing.module';
import { FormPageComponent } from './pages/form-page/form-page.component';

@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }