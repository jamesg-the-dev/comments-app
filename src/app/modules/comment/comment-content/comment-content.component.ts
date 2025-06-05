import { Component, Input } from '@angular/core';
import { CommentContent } from '../comment-body/comment-body.component';

@Component({
  selector: 'app-comment-content',
  template: `<p class="whitespace-pre-wrap">{{ text }}</p>`,
})
export class CommentContentComponent {
  @Input() text: CommentContent;
}
