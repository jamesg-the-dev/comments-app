import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SentCommentComponent } from './components/sent-comment/sent-comment.component';
import { ReplyBoxComponent } from './components/reply-box/reply-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SentCommentComponent, ReplyBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comments-app';
  comments = [1, 2, 3];
}
