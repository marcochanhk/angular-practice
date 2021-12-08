import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSampleAComponent } from './form-sample-a.component';

describe('FormSampleAComponent', () => {
  let component: FormSampleAComponent;
  let fixture: ComponentFixture<FormSampleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSampleAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
