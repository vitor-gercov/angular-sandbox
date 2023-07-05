import { Component, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { SelectOptions } from 'src/app/types';
import { Field } from 'src/app/types/field.type';

@Component({
  selector: 'app-edit-field-modal',
  templateUrl: './edit-field-modal.component.html',
  styleUrls: ['./edit-field-modal.component.css']
})
export class EditFieldModalComponent {
  @Input() field!: Field
  @ViewChild('editFieldDialog') editFieldDialog!: DialogComponent
  @Output() fieldEdited: Subject<Field> = new Subject<Field>()
  editFieldFormGroup!: FormGroup
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

  constructor(private formBuilder: FormBuilder) { }

  open(): void {
    this.editFieldFormGroup = this.formBuilder.group({
      question: [this.field.question, [Validators.required]],
      fieldType: [this.field.fieldType, [Validators.required]]
    })
    this.formSubmitted = false
    this.editFieldDialog.open()
  }

  editField(): void {
    this.formSubmitted = true
    if (this.editFieldFormGroup.invalid) {
      return
    }
    this.fieldEdited.next(this.editFieldFormGroup.value)
    this.editFieldDialog.close()
  }
}
