import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-sample',
  templateUrl: './form-control-sample.component.html',
  styleUrls: ['./form-control-sample.component.scss']
})
export class FormControlSampleComponent implements OnInit {

  form!: FormGroup;

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
    this.form.get('checked')?.enable();
    this.form.get('person.name')?.disable();
    this.form.get('key')?.setValue("value");
    this.form.get('key')?.clearValidators(); // required updateValueAndValidity()
    this.form.get('person.age')?.statusChanges.subscribe((val: any) => {
      switch(val){
        case "VALID":
          //do something
          break;
        default:
          break;
      }
    });

    this.form.value.key;
    this.form.controls.key.value;
    this.form.controls.key.valid;
    this.form.controls.key.valueChanges.subscribe(() => console.log("done"))
    this.form.controls['key'].setValue("data");
    this.form.patchValue({
      origin: 'origin',
      checked: true
    });
  }

  onSubmit(){ }

}
