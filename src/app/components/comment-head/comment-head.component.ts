import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { formatDistance } from 'date-fns';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';

@Component({
  selector: 'app-comment-head',
  standalone: true,
  imports: [AvatarComponent, ReplyButtonComponent],
  templateUrl: './comment-head.component.html',
  styleUrl: './comment-head.component.scss',
})
export class CommentHeadComponent {
  @Input() username: string;
  @Input() date: Date;

  formatedDate() {
    return formatDistance(this.date, new Date()) + ' ago';
  }
}
