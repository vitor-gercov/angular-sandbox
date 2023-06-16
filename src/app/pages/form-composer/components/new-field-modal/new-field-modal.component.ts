import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { SelectOptions } from 'src/app/types';
import { Field } from 'src/app/types/field.type';

@Component({
  selector: 'app-new-field-modal',
  templateUrl: './new-field-modal.component.html',
  styleUrls: ['./new-field-modal.component.css']
})
export class NewFieldModalComponent {
  @ViewChild('newFieldDialog') newFieldDialog!: DialogComponent
  newFieldFormGroup!: FormGroup
  selectOptions: SelectOptions = [
    {
      value: 'texto',
      description: 'texto',
    },
    {
      value: 'select',
      description: 'select',
    }
  ]
  formSubmitted!: boolean
  @Output() newFieldAdded: Subject<Field> = new Subject<Field>()

  constructor(private formBuilder: FormBuilder) { }

  open(): void {
    this.newFieldFormGroup = this.formBuilder.group({
      question: ['', [Validators.required]],
      fieldType: [this.selectOptions[0].value, [Validators.required]]
    })
    this.formSubmitted = false
    this.newFieldDialog.open()
  }

  addNewField(): void {
    this.formSubmitted = true
    if (this.newFieldFormGroup.invalid) {
      return
    }
    this.newFieldAdded.next(this.newFieldFormGroup.value)
    this.newFieldDialog.close()
  }
}
