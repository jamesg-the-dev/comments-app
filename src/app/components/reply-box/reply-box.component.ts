import { Component } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ReplyButtonComponent } from '../reply-button/reply-button.component';

@Component({
  selector: 'app-reply-box',
  standalone: true,
  imports: [TextboxComponent, AvatarComponent, ReplyButtonComponent],
  templateUrl: './reply-box.component.html',
  styleUrl: './reply-box.component.scss',
})
export class ReplyBoxComponent {}
