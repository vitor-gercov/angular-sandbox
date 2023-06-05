import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ButtonsModule } from '../buttons/buttons.module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [ButtonsModule]
})
export class DialogComponent {
  @Input() title: string = ''
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>

  open(): void {
    this.dialog.nativeElement.showModal()
  }

  close(): void {
    this.dialog.nativeElement.close()
  }
}
