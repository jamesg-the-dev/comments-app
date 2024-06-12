import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SentCommentComponent } from './components/sent-comment/sent-comment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SentCommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comments-app';
}
