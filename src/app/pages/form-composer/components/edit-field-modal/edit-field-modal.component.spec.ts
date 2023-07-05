import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFieldModalComponent } from './edit-field-modal.component';

describe('EditFieldModalComponent', () => {
  let component: EditFieldModalComponent;
  let fixture: ComponentFixture<EditFieldModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFieldModalComponent]
    });
    fixture = TestBed.createComponent(EditFieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
