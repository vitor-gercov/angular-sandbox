import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent } from './button/button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [ButtonComponent, StrokedButtonComponent, IconButtonComponent]
})
export class ButtonsModule { }
