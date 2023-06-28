import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { Field } from 'src/app/types/field.type';

@Component({
  selector: 'app-form-composer',
  templateUrl: './form-composer.component.html',
  styleUrls: ['./form-composer.component.css']
})
export class FormComposerComponent {
  fields: Field[] = []

  addField(field: Field): void {
    this.fields.push(field)
  }
}
