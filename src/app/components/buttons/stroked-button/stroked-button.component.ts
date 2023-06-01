import { Component, Input } from '@angular/core';
import { ButtonColors } from 'src/app/types/button-colors.type';

@Component({
  selector: 'app-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.css']
})
export class StrokedButtonComponent {
  @Input() color: ButtonColors = 'basic'
}
