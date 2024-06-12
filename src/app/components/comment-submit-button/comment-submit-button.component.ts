import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-reply-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './comment-submit-button.component.html',
  styleUrl: './comment-submit-button.component.scss',
})
export class CommentSubmitButton {
  @Input() text: 'Reply' | 'Update' | 'Send' = 'Reply';
}
