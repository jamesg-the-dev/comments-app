import { Component, Input, OnInit } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import {
  CommentBodyComponent,
  CommentContent,
  CommentHead,
} from '../comment-body/comment-body.component';
import { Comment, CommentService } from '../../services/comment.service';
import { lastValueFrom } from 'rxjs';
import { MediaScreenService } from '../../services/media-screen.service';
import { CommentActionsComponent } from '../comment-actions/comment-actions.component';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-mobile-comment-footer',
  standalone: true,
  imports: [
    VoteControlsComponent,
    CommentActionsComponent,
    ReplyButtonComponent,
  ],
  templateUrl: './mobile-comment-footer.component.html',
})

/**
 * TODO Didn't have time to centralise the vote logic in a service. Need to implement later
 */
export class MobileCommentFooter {
  @Input() comment: Comment;
  votes: number;
  userId: User['id'];

  constructor(
    public commentService: CommentService,
    public mediaService: MediaScreenService,
    public userService: UserService,
  ) {}

  ngOnInit() {
    this.votes = this.comment.votes;
    const user = this.userService.getCurrentUser();
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
  imports: [VoteControlsComponent, CommentBodyComponent, MobileCommentFooter],
  templateUrl: './sent-comment.component.html',
  styleUrl: './sent-comment.component.scss',
})
export class SentCommentComponent implements OnInit {
  @Input() comment: Comment;
  head: CommentHead;
  content: CommentContent;
  votes: number;

  constructor(
    private commentService: CommentService,
    public mediaService: MediaScreenService,
  ) {}

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
}
