import { Component, Input } from '@angular/core';
import { ButtonColor } from 'src/app/types/button-color.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color: ButtonColor = 'basic'
}
