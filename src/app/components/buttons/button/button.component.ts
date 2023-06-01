import { Component, Input } from '@angular/core';
import { ButtonColors } from 'src/app/types/button-colors.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color: ButtonColors = 'basic'
}
