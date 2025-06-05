import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from '../../../services/user.service';
import { Comment } from '../../../services/comment.service';
import { FormControl } from '@angular/forms';
import { TextboxComponent } from '../../../components/textbox/textbox.component';

export interface CommentHead {
  user: User;
  comment: Comment;
}

export type CommentContent = string;

@Component({
  selector: 'app-comment-body',
  template: `<div class="text-grayish-blue">
    <app-comment-head
      [user]="head.user"
      [comment]="head.comment"
      (edit)="editClicked()"
    />
    @if (editing) {
      <app-textbox
        #editBox
        class="flex-grow block mt-1"
        placeholder="Add a comment..."
        [formControl]="commentText"
        (keydown.control.enter)="save()"
      />
      <div class="flex gap-2 justify-end">
        <app-button buttonType="primary" (clicked)="save()">Save</app-button>
        <button
          class="text-soft-red block text-center underline "
          (click)="editing = false"
        >
          Cancel
        </button>
      </div>
    } @else {
      <app-comment-content class="mt-3 block" [text]="content" />
    }
  </div> `,
})
export class CommentBodyComponent implements OnInit {
  @ViewChild('editBox') editBox: TextboxComponent;

  @Input({ required: true }) head: CommentHead;
  @Input({ required: true }) content: string;

  @Output('save') saveComment = new EventEmitter<string>();

  editing = false;
  commentText = new FormControl<string>('');

  ngOnInit(): void {
    this.commentText.setValue(this.content);
  }

  editClicked() {
    this.editing = true;
    setTimeout(() => {
      this.editBox.focus();
    }, 0);
  }

  save() {
    const value = this.commentText.value?.trim();
    if (value) {
      this.saveComment.emit(value);
    }
  }
}
