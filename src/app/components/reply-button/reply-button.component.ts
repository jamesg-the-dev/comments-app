import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() clicked = new EventEmitter<void>();
  faReply = faReply;

  handleClick() {
    this.clicked.emit();
  }
}
