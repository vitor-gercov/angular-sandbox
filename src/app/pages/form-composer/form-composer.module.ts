import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComposerComponent } from './form-composer.component';
import { RouterModule } from '@angular/router';
import { formComposerRoutes } from './form-composer.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'src/app/components/buttons/buttons.module';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { NewFieldModalComponent } from './components/new-field-modal/new-field-modal.component';
import { EditFieldModalComponent } from './components/edit-field-modal/edit-field-modal.component';
import { FieldContainerComponent } from './components/field-container/field-container.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FormComposerComponent,
    NewFieldModalComponent,
    EditFieldModalComponent,
    FieldContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(formComposerRoutes),
    ButtonsModule,
    ReactiveFormsModule,
    DialogComponent,
    InputComponent,
    SelectComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class FormComposerModule { }
