import { Component, inject, Input, OnInit } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import {
  CommentContent,
  CommentHead,
} from '../../modules/comment/comment-body/comment-body.component';
import { Comment, CommentService } from '../../services/comment.service';
import { lastValueFrom } from 'rxjs';
import { MediaScreenService } from '../../services/media-screen.service';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';
import { User, UserService } from '../../services/user.service';
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

/**
 * TODO Didn't have time to centralise the vote logic in a service. Need to implement later
 */
export class MobileCommentFooter {
  @Input() comment: Comment;

  private _userService = inject(UserService);

  commentService = inject(CommentService);

  votes: number;
  userId: User['id'];

  ngOnInit() {
    this.votes = this.comment.votes;
    const user = this._userService.getCurrentUser();
    if (!user) return;
    this.userId = user.id;
  }

  async updateVote(votes: number) {
    const { comment } = await lastValueFrom(
      this.commentService.update(this.comment.id, { votes }),
    );
    this.votes = comment.votes;
  }

  decreaseVote() {
    this.updateVote(this.votes - 1);
  }

  increaseVote() {
    this.updateVote(this.votes + 1);
  }

  toggleReply() {
    if (this.comment.parentCommentId) {
      this.commentService.openReplyBoxFor(this.comment.parentCommentId);
    } else {
      this.commentService.openReplyBoxFor(this.comment.id);
    }
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
  @Input() comment: Comment;

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

  async updateVote(votes: number) {
    const { comment } = await lastValueFrom(
      this._commentService.update(this.comment.id, { votes }),
    );
    this.votes = comment.votes;
  }

  decreaseVote() {
    this.updateVote(this.votes - 1);
  }

  increaseVote() {
    this.updateVote(this.votes + 1);
  }
}
