import { Component, Input } from '@angular/core';
import { ButtonColors } from 'src/app/types/button-colors.type';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input() color: ButtonColors = 'basic'
  @Input() tooltip: string = ''
}
