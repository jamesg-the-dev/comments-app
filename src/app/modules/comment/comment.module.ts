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
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { TextboxComponent } from '../../components/textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    CommentContentComponent,
    CommentHeadComponent,
    CommentBodyComponent,
    CommentActionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TextboxComponent,
    ReactiveFormsModule,
    AvatarComponent,
    ReplyButtonComponent,
    BadgeComponent,
    IconButtonComponent,
    CommentBoxComponent,
    TimeAgoPipe,
  ],
  exports: [CommentBodyComponent, CommentActionsComponent],
})
export class CommentModule {}
