import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokedButtonComponent } from './stroked-button.component';

describe('StrokedButtonComponent', () => {
  let component: StrokedButtonComponent;
  let fixture: ComponentFixture<StrokedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrokedButtonComponent]
    });
    fixture = TestBed.createComponent(StrokedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
