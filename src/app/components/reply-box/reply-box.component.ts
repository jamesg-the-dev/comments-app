import { Component } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommentSubmitButton } from '../comment-submit-button/comment-submit-button.component';

@Component({
  selector: 'app-reply-box',
  standalone: true,
  imports: [TextboxComponent, AvatarComponent, CommentSubmitButton],
  templateUrl: './reply-box.component.html',
  styleUrl: './reply-box.component.scss',
})
export class ReplyBoxComponent {}
