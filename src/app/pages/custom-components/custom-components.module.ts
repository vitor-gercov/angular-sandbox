import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsComponent } from './custom-components.component';
import { RouterModule } from '@angular/router';
import { customComponentsRoutes } from './custom-components.routes';
import { CustomSwitchModule } from 'src/app/components/custom-switch/custom-switch.module';



@NgModule({
  declarations: [
    CustomComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customComponentsRoutes),
    CustomSwitchModule
  ]
})
export class CustomComponentsModule { }
