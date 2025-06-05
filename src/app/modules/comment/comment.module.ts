import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { ReplyButtonComponent } from '../../components/reply-button/reply-button.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { CommentActionsComponent } from './comment-actions/comment-actions.component';
import { CommentContentComponent } from './comment-content/comment-content.component';
import { CommentHeadComponent } from './comment-head/comment-head.component';
import { CommentBodyComponent } from './comment-body/comment-body.component';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [
    CommentContentComponent,
    CommentHeadComponent,
    CommentBodyComponent,
    CommentActionsComponent,
  ],
  imports: [
    CommonModule,
    AvatarComponent,
    ReplyButtonComponent,
    BadgeComponent,
    IconButtonComponent,
    CommentBoxComponent,
  ],
  exports: [CommentBodyComponent, CommentActionsComponent],
})
export class CommentModule {}
