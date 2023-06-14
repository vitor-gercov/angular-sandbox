import { Component, Input } from '@angular/core';
import { ButtonColor } from 'src/app/types/button-color.type';

@Component({
  selector: 'app-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.css']
})
export class StrokedButtonComponent {
  @Input() color: ButtonColor = 'basic'
}
