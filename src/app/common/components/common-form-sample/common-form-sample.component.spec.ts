import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormSampleComponent } from './common-form-sample.component';

describe('CommonFormSampleComponent', () => {
  let component: CommonFormSampleComponent;
  let fixture: ComponentFixture<CommonFormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFormSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
