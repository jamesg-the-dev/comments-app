import { Component } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-reply-box',
  standalone: true,
  imports: [TextboxComponent, AvatarComponent],
  templateUrl: './reply-box.component.html',
  styleUrl: './reply-box.component.scss',
})
export class ReplyBoxComponent {}
