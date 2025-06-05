import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    class="btn"
    [type]="type"
    [disabled]="disabled"
    [ngClass]="['btn--' + buttonType, 'btn--' + size, classes]"
    [attr.aria-label]="ariaLabel"
    [attr.aria-describedby]="ariaDescribedBy"
    (click)="onClick()"
  >
    <ng-content></ng-content>
  </button> `,
})
export class ButtonComponent {
  @Input() type = 'button';
  @Input() disabled = false;
  @Input() classNames: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() ariaLabel: string;
  @Input() ariaDescribedBy: string;
  @Input() buttonType: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

  @HostBinding('class')
  get classes(): string {
    return this.classNames ?? '';
  }
}
