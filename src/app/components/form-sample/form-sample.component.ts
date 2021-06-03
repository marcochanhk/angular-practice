import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss']
})
export class FormSampleComponent implements OnInit {

  form: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm(){
    this.form = this.fb.group({
      checked: [false],
      origin: [{ value: '', disabled: true }, Validators.required],
      person: this.fb.group({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(18)]],
      })
    });
  }

  modifyForm(){
    this.form.get('key').enable();
    this.form.get('person.name').disable();
    this.form.get('key').setValue("value");
    this.form.get('person.age').statusChanges.subscribe((val: any) => {
      switch(val){
        case "VALID":
          //do something
          break;
        default:
          break;
      }
    })
    this.form.get('key').clearValidators(); // required updateValueAndValidity()

    this.form.value.key;
    this.form.controls.key.value;
    this.form.controls['key'].setValue("data");
    this.form.patchValue({
      origin: 'origin',
      checked: true
    });


  }

  onSubmit(){

  }

}
