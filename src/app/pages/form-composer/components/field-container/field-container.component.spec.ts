import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldContainerComponent } from './field-container.component';

describe('FieldContainerComponent', () => {
  let component: FieldContainerComponent;
  let fixture: ComponentFixture<FieldContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldContainerComponent]
    });
    fixture = TestBed.createComponent(FieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
