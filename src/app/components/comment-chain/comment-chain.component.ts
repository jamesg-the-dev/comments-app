import { Component, OnInit } from '@angular/core';
import { SentCommentComponent } from '../sent-comment/sent-comment.component';
import { Observable } from 'rxjs';
import { Comment, CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-chain',
  standalone: true,
  imports: [SentCommentComponent],
  templateUrl: './comment-chain.component.html',
  styleUrl: './comment-chain.component.scss',
})
export class CommentChainComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.retrieveAll().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
