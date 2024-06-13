import { Component, Input, OnInit } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import {
  CommentBodyComponent,
  CommentContent,
  CommentHead,
} from '../comment-body/comment-body.component';
import { Comment, CommentService } from '../../services/comment.service';
import { lastValueFrom } from 'rxjs';

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
  votes: number;

  constructor(private commentService: CommentService) {}

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
