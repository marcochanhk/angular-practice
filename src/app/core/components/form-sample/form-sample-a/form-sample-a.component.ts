import { Component, createPlatform, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sample-a',
  templateUrl: './form-sample-a.component.html',
  styleUrls: ['./form-sample-a.component.scss']
})
export class FormSampleAComponent implements OnInit {

  @Input() formTitle: string;

  form: FormGroup;
  clickedSubmit: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        // nested form group
        name: this.fb.group(
          {
            fullName: ['', Validators.required],
            lastName: [''],
          }
        ),        
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        confirmPassword: ['', Validators.required],
      },
      {
        // form group level validation, custom validator to be done
        // validators: [Validation.match('password', 'confirmPassword')]
      }
    )
  }

  initFormData(): void { }

  onSubmit(): void { 
    this.clickedSubmit = true;
    if (this.form.invalid) {
      return;
    }
  }

  onReset(): void {
    this.clickedSubmit = false;
    this.form.reset();
  }

}
