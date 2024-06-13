import { Component, Input } from '@angular/core';
import { CommentContent } from '../comment-body/comment-body.component';

@Component({
  selector: 'app-comment-content',
  standalone: true,
  imports: [],
  templateUrl: './comment-content.component.html',
  styleUrl: './comment-content.component.scss',
})
export class CommentContentComponent {
  @Input() text: CommentContent;
}
