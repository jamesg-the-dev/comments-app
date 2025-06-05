import { Component, inject, Input, ViewChild } from '@angular/core';
import { TextboxComponent } from '../../../components/textbox/textbox.component';
import { AvatarComponent } from '../../../components/avatar/avatar.component';
import {
  CommentButtonTypes,
  CommentSubmitButton,
} from '../../../components/comment-submit-button/comment-submit-button.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  CommentService,
  CreateCommentRequest,
} from '../../../services/comment.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [
    TextboxComponent,
    AvatarComponent,
    CommentSubmitButton,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './comment-box.component.html',
})
export class CommentBoxComponent {
  @ViewChild(TextboxComponent) textbox: TextboxComponent;

  @Input() type: CommentButtonTypes = 'Reply';
  @Input() cancellable: boolean = false;
  @Input() parentCommentId: number;
  @Input() avatarSrc: string = '';

  private _commentService = inject(CommentService);
  private _userService = inject(UserService);

  commentText = new FormControl<string>('');

  submit() {
    const user = this._userService.getCurrentUser();
    const comment = this.commentText.value?.trim();

    if (!user || !comment) return;

    const request: CreateCommentRequest = { comment: comment };
    if (this.parentCommentId) {
      request.parentCommentId = this.parentCommentId;
    }
    this._commentService.create(user.id, request).subscribe({
      next: () => {
        this._commentService.refreshComments();
        this.commentText.reset();
      },
      error: () => {
        //todo handle error
      },
    });
  }

  onCancelClick() {
    if (!this.parentCommentId) return;
    this._commentService.closeReplyBoxFor(this.parentCommentId);
  }
}
