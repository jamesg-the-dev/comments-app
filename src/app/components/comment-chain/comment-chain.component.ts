import { Component, OnInit } from '@angular/core';
import { SentCommentComponent } from '../sent-comment/sent-comment.component';
import { Comment, CommentService } from '../../services/comment.service';
import { CommentBoxComponent } from '../comment-box/comment-box.component';

@Component({
  selector: 'app-comment-chain',
  standalone: true,
  imports: [SentCommentComponent, CommentBoxComponent],
  templateUrl: './comment-chain.component.html',
  styleUrl: './comment-chain.component.scss',
})
export class CommentChainComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.refreshComments();
    this.commentService._comments.subscribe((comments) => {
      this.comments = comments;
    });
  }
}
