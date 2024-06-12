import { Component } from '@angular/core';
import { CommentHeadComponent } from '../comment-head/comment-head.component';
import { CommentContentComponent } from '../comment-content/comment-content.component';
import { subDays } from 'date-fns';

@Component({
  selector: 'app-comment-body',
  standalone: true,
  imports: [CommentHeadComponent, CommentContentComponent],
  templateUrl: './comment-body.component.html',
  styleUrl: './comment-body.component.scss',
})
export class CommentBodyComponent {
  date = subDays(new Date(), 1);
}
