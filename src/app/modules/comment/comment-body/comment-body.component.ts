import { Component, Input } from '@angular/core';
import { CommentHeadComponent } from '../comment-head/comment-head.component';
import { CommentContentComponent } from '../comment-content/comment-content.component';
import { User } from '../../../services/user.service';
import { Comment } from '../../../services/comment.service';

export interface CommentHead {
  user: User;
  comment: Comment;
}

export type CommentContent = string;

@Component({
  selector: 'app-comment-body',
  template: `<div class="text-grayish-blue">
    <app-comment-head [user]="head.user" [comment]="head.comment" />
    <app-comment-content class="mt-3 block" [text]="content" />
  </div> `,
})
export class CommentBodyComponent {
  @Input() head: CommentHead;
  @Input() content: string;
}
