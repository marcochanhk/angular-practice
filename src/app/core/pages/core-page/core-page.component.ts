import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
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


  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void { 
    this.testService.getUser().subscribe(
      res => {
        console.info(res);
      },
      error => {
        console.error(error);
      },
      () => {}
    );


    
  }

  ngAfterViewInit(): void  { }

}
