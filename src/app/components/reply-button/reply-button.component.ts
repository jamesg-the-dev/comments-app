import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reply-button',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './reply-button.component.html',
  styleUrl: './reply-button.component.scss',
})
export class ReplyButtonComponent {
  faReply = faReply;
}
