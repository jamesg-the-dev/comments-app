import { Component } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommentSubmitButton } from '../comment-submit-button/comment-submit-button.component';

@Component({
  selector: 'app-reply-box',
  standalone: true,
  imports: [TextboxComponent, AvatarComponent, CommentSubmitButton],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.scss',
})
export class CommentBoxComponent {}
