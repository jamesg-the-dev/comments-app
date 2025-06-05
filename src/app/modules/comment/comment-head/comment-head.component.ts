import { Component, inject, Input, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import { User, UserService } from '../../../services/user.service';
import { Comment, CommentService } from '../../../services/comment.service';
import { MediaScreenService } from '../../../services/media-screen.service';

@Component({
  selector: 'app-comment-head',
  templateUrl: './comment-head.component.html',
})
export class CommentHeadComponent implements OnInit {
  @Input() user: User;
  @Input() comment: Comment;

  private _commentService = inject(CommentService);
  private _userService = inject(UserService);
  private _mediaService = inject(MediaScreenService);

  isCurrentUser = false;
  isSmallScreen$ = this._mediaService.isSmallScreen$;

  ngOnInit(): void {
    const user = this._userService.getCurrentUser();
    if (!user) return;
    this.isCurrentUser = this._commentService.isCurrentUser(
      this.comment,
      user.id,
    );
  }

  deleteComment() {
    this._commentService.delete(this.comment.id).subscribe(() => {
      this._commentService.refreshComments();
    });
  }

  handleEdit() {
    console.log("Didn't have time to implement this");
  }

  toggleReply() {
    const commentId = this.comment.parentCommentId || this.comment.id;
    this._commentService.openReplyBoxFor(commentId);
  }
}
