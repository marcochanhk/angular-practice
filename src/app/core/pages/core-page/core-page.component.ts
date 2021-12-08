import { Component, OnInit, ViewChild } from '@angular/core';
import { FormSampleAComponent } from '../../components/form-sample/form-sample-a/form-sample-a.component';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss']
})
export class CorePageComponent implements OnInit {

  // ViewChild always returns the first component.
  @ViewChild(FormSampleAComponent) formA: FormSampleAComponent; // By Component Type
  @ViewChild('formA2') formA2f: FormSampleAComponent; // By Using Template Reference Variable


  constructor() { }

  ngOnInit(): void {
  }

}
