import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComposerComponent } from './form-composer.component';

describe('FormComposerComponent', () => {
  let component: FormComposerComponent;
  let fixture: ComponentFixture<FormComposerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComposerComponent]
    });
    fixture = TestBed.createComponent(FormComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
