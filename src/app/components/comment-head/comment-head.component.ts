import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { formatDistance } from 'date-fns';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';
import { User, UserService } from '../../services/user.service';
import { Comment, CommentService } from '../../services/comment.service';
import { BadgeComponent } from '../badge/badge.component';
import { CommonModule } from '@angular/common';
import { CommentActionsComponent } from '../comment-actions/comment-actions.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-comment-head',
  standalone: true,
  imports: [
    AvatarComponent,
    ReplyButtonComponent,
    BadgeComponent,
    CommentActionsComponent,
    CommonModule,
  ],
  templateUrl: './comment-head.component.html',
  styleUrl: './comment-head.component.scss',
})
export class CommentHeadComponent implements OnInit {
  @Input() user: User;
  @Input() comment: Comment;
  isCurrentUser = false;

  constructor(
    private commentService: CommentService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    if (!user) return;
    this.isCurrentUser = this.commentService.isCurrentUser(
      this.comment,
      user.id,
    );
  }

  formatedDate() {
    return formatDistance(this.comment.createdAt, new Date()) + ' ago';
  }

  //todo I think a better approach would be to splice the comments array instead of refreshing the whole lot. Leaving this here for due to time constraints
  async deleteComment() {
    try {
      await lastValueFrom(this.commentService.delete(this.comment.id));
      this.commentService.refreshComments();
    } catch (error) {}
  }

  handleEdit() {
    console.log('editing', this.comment);
  }

  toggleReply() {
    if (!this.comment.parentCommentId) return;
    this.commentService.openReplyBoxFor(this.comment.parentCommentId);
  }
}
