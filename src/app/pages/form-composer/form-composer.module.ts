import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComposerComponent } from './form-composer.component';
import { RouterModule } from '@angular/router';
import { formComposerRoutes } from './form-composer.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'src/app/components/buttons/buttons.module';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';



@NgModule({
  declarations: [
    FormComposerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(formComposerRoutes),
    ButtonsModule,
    DialogComponent
  ]
})
export class FormComposerModule { }
