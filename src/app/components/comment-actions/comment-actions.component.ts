import { Component, EventEmitter, Output } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment-actions',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './comment-actions.component.html',
  styleUrl: './comment-actions.component.scss',
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
