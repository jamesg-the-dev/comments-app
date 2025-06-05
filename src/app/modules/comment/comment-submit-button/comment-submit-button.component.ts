import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';

export type CommentButtonTypes = 'Reply' | 'Update' | 'Send';

@Component({
  selector: 'app-reply-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `<app-button button-type="primary" type="submit">{{
    text
  }}</app-button> `,
})
export class CommentSubmitButton {
  @Input() text: CommentButtonTypes = 'Reply';
}
