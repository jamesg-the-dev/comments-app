import { Component, Input } from '@angular/core';
import { VoteControlsComponent } from '../vote-controls/vote-controls.component';
import { CommentBodyComponent } from '../comment-body/comment-body.component';

@Component({
  selector: 'app-sent-comment',
  standalone: true,
  imports: [VoteControlsComponent, CommentBodyComponent],
  templateUrl: './sent-comment.component.html',
  styleUrl: './sent-comment.component.scss',
})
export class SentCommentComponent {
  // @Input() comment: string;
}
