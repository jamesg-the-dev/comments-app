import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiiUrl } from '../utilities/globals';
import { User } from './user.service';
import { BehaviorSubject } from 'rxjs';
import { CommonMessage } from '../interfaces/http.interface';

export interface CreateCommentRequest {
  comment: string;
  parentCommentId?: number;
}

export interface UpdateCommentRequest extends Partial<CreateCommentRequest> {
  votes?: number;
}

export interface Comment {
  id: number;
  commentText: string;
  votes: number;
  parentCommentId?: number;
  user: User;
  replying?: boolean;
  createdAt: Date;
  updatedAt: Date;
  children?: Comment[];
}

export interface UpdateCommentResponse {
  message: string;
  comment: Comment;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private _http = inject(HttpClient);

  private _comments = new BehaviorSubject<Comment[]>([]);
  comments$ = this._comments.asObservable();

  get comments() {
    return this._comments.value;
  }

  create(userId: number, data: CreateCommentRequest) {
    return this._http.post<CommonMessage>(
      `${apiiUrl}users/${userId}/comment`,
      data,
    );
  }

  retrieveAll() {
    return this._http.get<Comment[]>(`${apiiUrl}comments`);
  }

  update(commentId: number, data: UpdateCommentRequest) {
    return this._http.put<UpdateCommentResponse>(
      `${apiiUrl}comments/${commentId}`,
      data,
    );
  }

  delete(id: number) {
    return this._http.delete<CommonMessage>(`${apiiUrl}comments/${id}`);
  }

  isCurrentUser(comment: Comment, userId: number) {
    return userId === comment.user.id;
  }

  refreshComments() {
    this.retrieveAll().subscribe(comments => {
      this._comments.next(comments);
    });
  }

  /**
   * Opens the reply box for a parent comment
   */
  openReplyBoxFor(commentParentId: number) {
    const index = this.getParentCommentIndex(commentParentId);
    this.comments[index].replying = true;
  }

  /**
   * Closes the reply box for a parent comment
   */
  closeReplyBoxFor(commentParentId: number) {
    const index = this.getParentCommentIndex(commentParentId);
    this.comments[index].replying = false;
  }

  private getParentCommentIndex(parentCommentId: number) {
    const parentCommentIndex = this.comments.findIndex(
      comment => comment.id === parentCommentId,
    );

    if (parentCommentIndex === -1) {
      throw new Error('Parent comment not found');
    }

    return parentCommentIndex;
  }
}
