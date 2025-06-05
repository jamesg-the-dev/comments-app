import { Component, inject, Input, OnInit } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import {
  CommentContent,
  CommentHead,
} from '../../modules/comment/comment-body/comment-body.component';
import { Comment, CommentService } from '../../services/comment.service';
import { MediaScreenService } from '../../services/media-screen.service';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { CommentModule } from '../../modules/comment/comment.module';

@Component({
  selector: 'app-mobile-comment-footer',
  standalone: true,
  imports: [
    CommonModule,
    VoteControlsComponent,
    ReplyButtonComponent,
    CommentModule,
  ],
  templateUrl: './mobile-comment-footer.component.html',
})
export class MobileCommentFooter {
  @Input() comment: Comment;

  private _userService = inject(UserService);

  commentService = inject(CommentService);

  votes: number;
  userId: number;

  ngOnInit() {
    this.votes = this.comment.votes;
    const user = this._userService.getCurrentUser();
    if (!user) return;
    this.userId = user.id;
  }

  updateVote(votes: number) {
    this.commentService.update(this.comment.id, { votes }).subscribe({
      next: res => {
        this.votes = res.comment.votes;
      },
    });
  }

  decreaseVote() {
    this.updateVote(this.votes - 1);
  }

  increaseVote() {
    this.updateVote(this.votes + 1);
  }

  toggleReply() {
    this.commentService.openReplyBoxFor(
      this.comment.parentCommentId || this.comment.id,
    );
  }
}

@Component({
  selector: 'app-sent-comment',
  standalone: true,
  imports: [
    CommonModule,
    VoteControlsComponent,
    CommentModule,
    MobileCommentFooter,
  ],
  templateUrl: './sent-comment.component.html',
})
export class SentCommentComponent implements OnInit {
  @Input({ required: true }) comment: Comment;
  @Input() editing: boolean;

  private _commentService = inject(CommentService);
  private _mediaService = inject(MediaScreenService);

  head: CommentHead;
  content: CommentContent;
  votes: number;

  isSmallScreen$ = this._mediaService.isSmallScreen$;

  ngOnInit() {
    this.votes = this.comment.votes;

    this.head = {
      user: this.comment.user,
      comment: this.comment,
    };

    this.content = this.comment.commentText;
  }

  updateVote(votes: number) {
    this._commentService.update(this.comment.id, { votes }).subscribe({
      next: res => {
        this.votes = res.comment.votes;
      },
    });
  }

  decreaseVote() {
    this.updateVote(this.votes - 1);
  }

  increaseVote() {
    this.updateVote(this.votes + 1);
  }

  updateComment(value: string) {
    this._commentService
      .update(this.comment.id, {
        comment: value,
      })
      .subscribe({
        next: () => {
          this._commentService.refreshComments();
        },
      });
  }
}
