import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SelectOptions } from 'src/app/types';
import { StringHelperService } from 'src/app/services';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() label!: string
  @Input() placeholder?: string
  @Input() selectOptions: SelectOptions = []
  value!: string

  constructor(private stringHelperService: StringHelperService) { }

  ngOnInit(): void {
    if (this.stringHelperService.isStringEmpty(this.label)) {
      throw new Error('Label não informada para o componente select.')
    }
  }

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChanged = fn
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  onChanged(value: string): void { };
  onTouched(): void { };
}
