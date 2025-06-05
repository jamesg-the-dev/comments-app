import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { SentCommentComponent } from '../sent-comment/sent-comment.component';
import { Comment, CommentService } from '../../services/comment.service';
import { CommentBoxComponent } from '../../modules/comment/comment-box/comment-box.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-comment-chain',
  standalone: true,
  imports: [SentCommentComponent, CommentBoxComponent],
  templateUrl: './comment-chain.component.html',
})
export class CommentChainComponent implements OnInit {
  private _commentService = inject(CommentService);
  private _destroy = inject(DestroyRef);

  comments: Comment[] = [];

  ngOnInit() {
    this._commentService.refreshComments();
    this._commentService.comments$
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe(comments => {
        this.comments = comments;
      });
  }
}
