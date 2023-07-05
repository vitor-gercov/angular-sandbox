import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { Field } from 'src/app/types/field.type';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.css']
})
export class FieldContainerComponent implements AfterViewInit {
  @Input() field!: Field
  @ViewChild('fieldContainer', { read: ViewContainerRef }) fieldContainer!: ViewContainerRef
  components: { value: string, component: any }[] = [
    {
      value: 'texto',
      component: InputComponent
    },
    {
      value: 'select',
      component: SelectComponent
    }
  ]

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.renderField()
  }

  renderField(): void {
    this.fieldContainer.clear()
    const componentToRender = this.getComponentByFieldType(this.field.fieldType)
    let componentReference = this.fieldContainer.createComponent(componentToRender)
    componentReference.setInput('label', this.field.question)
    this.changeDetectorRef.detectChanges()
  }

  editField(field: Field): void {
    this.field = field
    this.renderField()
  }

  getComponentByFieldType(fieldType: string) {
    return this.components.find((component) => component.value === fieldType)?.component
  }
}
