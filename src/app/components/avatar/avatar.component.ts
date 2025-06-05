import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="containerClass">
    <img
      *ngIf="src"
      [src]="src"
      [alt]="alt"
      [title]="title"
      [class]="classNames"
      [width]="size"
      [height]="size"
    />
  </div> `,
})
export class AvatarComponent {
  @Input() src: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() size = 50;
  @Input() classNames: string;
  @Input() containerClass: string;
}
