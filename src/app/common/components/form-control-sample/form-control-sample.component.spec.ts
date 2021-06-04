import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlSampleComponent } from './form-control-sample.component';

describe('FormControlSampleComponent', () => {
  let component: FormControlSampleComponent;
  let fixture: ComponentFixture<FormControlSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
