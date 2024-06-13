import { Component, Input, ViewChild } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { AvatarComponent } from '../avatar/avatar.component';
import {
  CommentButtonTypes,
  CommentSubmitButton,
} from '../comment-submit-button/comment-submit-button.component';
import { Comment, CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { lastValueFrom } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [
    TextboxComponent,
    AvatarComponent,
    CommentSubmitButton,
    ButtonComponent,
  ],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.scss',
})
export class CommentBoxComponent {
  @ViewChild(TextboxComponent) textbox: TextboxComponent;
  @Input() type: CommentButtonTypes = 'Reply';
  @Input() cancellable: boolean = false;
  @Input() parentCommentId: Comment['parentCommentId'];
  commentText = '';

  constructor(
    private commentService: CommentService,
    private userService: UserService,
  ) {}

  async submit() {
    const user = this.userService.getCurrentUser();

    if (!user || !this.commentText) return;

    try {
      await lastValueFrom(
        this.commentService.create(user.id, { comment: this.commentText }),
      );

      this.textbox?.resetValue();
      this.commentService.refreshComments();
    } catch (error) {
      //todo handle error
    }
  }

  //todo I would love to pass the value in as a FormControl to the TextboxComponent, however it will require more time to figure out. Leaving here for now due to time constraints.
  onValueChange(value: string) {
    this.commentText = value.trim();
  }

  onCancelClick() {
    if (!this.parentCommentId) return;
    this.commentService.closeReplyBoxFor(this.parentCommentId);
  }
}
