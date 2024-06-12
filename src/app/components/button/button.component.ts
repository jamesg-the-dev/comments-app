import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
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

  classes() {
    return typeof this.classNames === undefined ? '' : this.classNames;
  }
}
