import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-comment-head',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './comment-head.component.html',
  styleUrl: './comment-head.component.scss',
})
export class CommentHeadComponent {}
