import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextboxComponent } from './components/textbox/textbox.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ReplyBoxComponent } from './components/reply-box/reply-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextboxComponent, AvatarComponent, ReplyBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comments-app';
}
