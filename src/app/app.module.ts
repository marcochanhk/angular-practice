import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormSampleComponent } from './form-sample/form-sample.component';
import { TableSampleComponent } from './table-sample/table-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSampleComponent,
    TableSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
