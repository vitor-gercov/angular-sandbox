import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { Field } from 'src/app/types/field.type';

@Component({
  selector: 'app-form-composer',
  templateUrl: './form-composer.component.html',
  styleUrls: ['./form-composer.component.css']
})
export class FormComposerComponent {
  @ViewChild('formContainer', { read: ViewContainerRef }) formContainer!: ViewContainerRef
  components: { value: string, component: any }[] = [
    {
      value: 'texto',
      component: InputComponent
    },
    {
      value: 'select',
      component: SelectComponent
    },
    {
      value: 'navbar',
      component: NavbarComponent
    },
  ]

  renderNewField(newField: Field): void {
    const componentToRender = this.getComponentByFieldType(newField.fieldType)
    let componentReference = this.formContainer.createComponent(componentToRender)
    componentReference.setInput('label', newField.question)
  }

  getComponentByFieldType(fieldType: string) {
    return this.components.find((component) => component.value === fieldType)?.component
  }
}
