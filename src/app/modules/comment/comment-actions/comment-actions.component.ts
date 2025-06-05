import { Component, EventEmitter, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment-actions',
  templateUrl: './comment-actions.component.html',
})
export class CommentActionsComponent {
  @Output() deleteClicked = new EventEmitter();
  @Output() editClicked = new EventEmitter();

  faTrash = faTrash;
  faEdit = faEdit;

  onDeleteClick() {
    this.deleteClicked.emit();
  }

  onEditClick() {
    this.editClicked.emit();
  }
}
