import { Component, Input } from '@angular/core';
import { ButtonColor } from 'src/app/types/button-color.type';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input() color: ButtonColor = 'basic'
  @Input() tooltip: string = ''
}
