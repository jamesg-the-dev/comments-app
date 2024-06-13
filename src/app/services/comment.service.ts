import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiiUrl } from '../utilities/globals';
import { Observable } from 'rxjs';

export interface CreatCommentRequest {
  comment: string;
  parentCommentId?: number;
}

export interface UpdateCommentRequest extends CreatCommentRequest {
  vote: number;
}

export interface Comment {
  id: number;
  comment: string;
  vote: number;
  parentCommentId?: number;
  createdAt: Date;
  updatedAt: Date;
  children?: Comment[];
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
    return this.http.get<Comment[]>(`${apiiUrl}/comments`);
  }

  update(commentId: number, data: UpdateCommentRequest) {
    return this.http.put(`${apiiUrl}/comments/${commentId}`, data);
  }

  delete(id: number) {
    return this.http.delete<void>(`${apiiUrl}/resource/${id}`);
  }
}
