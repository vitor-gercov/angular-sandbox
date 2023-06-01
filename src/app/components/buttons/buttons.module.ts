import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    StrokedButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [ButtonComponent, StrokedButtonComponent]
})
export class ButtonsModule { }
