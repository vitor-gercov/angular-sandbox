import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-form-composer',
  templateUrl: './form-composer.component.html',
  styleUrls: ['./form-composer.component.css']
})
export class FormComposerComponent {
  @ViewChild('newFormFieldDialog') newFormFieldDialog!: DialogComponent
  newFormFieldFormGroup!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  openNewFormFieldModal(): void {
    this.newFormFieldFormGroup = this.formBuilder.group({
      question: ['', [Validators.required]]
    })
    this.newFormFieldDialog.open()
  }
}
