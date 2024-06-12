import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-reply-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './reply-button.component.html',
  styleUrl: './reply-button.component.scss',
})
export class ReplyButtonComponent {
  @Input() text: 'Reply' | 'Update' | 'Send' = 'Reply';
}
