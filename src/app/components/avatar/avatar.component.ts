import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() src: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() size = 50;
  @Input() classNames: string;
  @Input() containerClass: string;
}
