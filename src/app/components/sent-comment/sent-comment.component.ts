import { Component, Input, OnInit } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import {
  CommentBodyComponent,
  CommentContent,
  CommentHead,
} from '../comment-body/comment-body.component';
import { Comment } from '../../services/comment.service';

@Component({
  selector: 'app-sent-comment',
  standalone: true,
  imports: [VoteControlsComponent, CommentBodyComponent],
  templateUrl: './sent-comment.component.html',
  styleUrl: './sent-comment.component.scss',
})
export class SentCommentComponent implements OnInit {
  @Input() comment: Comment;
  head: CommentHead;
  content: CommentContent;

  ngOnInit() {
    this.head = {
      username: this.comment.user.username,
      date: this.comment.createdAt,
    };
    this.content = this.comment.commentText;
  }
}
