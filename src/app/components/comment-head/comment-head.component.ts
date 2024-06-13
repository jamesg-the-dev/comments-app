import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { formatDistance } from 'date-fns';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';
import { User, UserService } from '../../services/user.service';
import { Comment, CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-head',
  standalone: true,
  imports: [AvatarComponent, ReplyButtonComponent],
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
}
