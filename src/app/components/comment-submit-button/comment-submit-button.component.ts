import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

export type CommentButtonTypes = 'Reply' | 'Update' | 'Send';

@Component({
  selector: 'app-reply-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './comment-submit-button.component.html',
  styleUrl: './comment-submit-button.component.scss',
})
export class CommentSubmitButton {
  @Input() text: CommentButtonTypes = 'Reply';
}
