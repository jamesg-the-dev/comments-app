import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiiUrl } from '../utilities/globals';
import { User } from './user.service';

export interface CreatCommentRequest {
  comment: string;
  parentCommentId?: number;
}

export interface UpdateCommentRequest extends Partial<CreatCommentRequest> {
  votes?: number;
}

export interface Comment {
  id: number;
  commentText: string;
  votes: number;
  parentCommentId?: number;
  user: User;
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
  constructor(private http: HttpClient) {}

  create(userId: number, data: CreatCommentRequest) {
    return this.http.post<{ message: string }>(
      `${apiiUrl}users/${userId}/comment`,
      data,
    );
  }

  retrieveAll() {
    return this.http.get<Comment[]>(`${apiiUrl}comments`);
  }

  update(commentId: number, data: UpdateCommentRequest) {
    return this.http.put<UpdateCommentResponse>(
      `${apiiUrl}comments/${commentId}`,
      data,
    );
  }

  delete(id: number) {
    return this.http.delete<void>(`${apiiUrl}comments/${id}`);
  }

  isCurrentUser(comment: Comment, userId: number) {
    return userId === comment.user.id;
  }
}
