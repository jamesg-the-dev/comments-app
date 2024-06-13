import { Component, Input, OnInit } from '@angular/core';
import { CommentHeadComponent } from '../comment-head/comment-head.component';
import { CommentContentComponent } from '../comment-content/comment-content.component';
import { subDays } from 'date-fns';
import { User } from '../../services/user.service';
import { Comment } from '../../services/comment.service';

export interface CommentHead {
  user: User;
  comment: Comment;
}

export type CommentContent = string;

@Component({
  selector: 'app-comment-body',
  standalone: true,
  imports: [CommentHeadComponent, CommentContentComponent],
  templateUrl: './comment-body.component.html',
  styleUrl: './comment-body.component.scss',
})
export class CommentBodyComponent {
  @Input() head: CommentHead;
  @Input() content: CommentContent;
}
