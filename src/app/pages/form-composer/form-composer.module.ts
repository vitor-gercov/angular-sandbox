import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComposerComponent } from './form-composer.component';
import { RouterModule } from '@angular/router';
import { formComposerRoutes } from './form-composer.routes';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComposerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(formComposerRoutes)
  ]
})
export class FormComposerModule { }
