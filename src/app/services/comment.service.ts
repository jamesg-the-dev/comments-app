import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiiUrl } from '../utilities/globals';
import { User } from './user.service';
import { BehaviorSubject } from 'rxjs';

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

//todo put this in utility types file
type CommonMessage = { message: string };

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments$ = new BehaviorSubject<Comment[]>([]);
  comments = this.comments$.asObservable();

  constructor(private http: HttpClient) {}

  create(userId: number, data: CreatCommentRequest) {
    return this.http.post<CommonMessage>(
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
    return this.http.delete<CommonMessage>(`${apiiUrl}comments/${id}`);
  }

  isCurrentUser(comment: Comment, userId: number) {
    return userId === comment.user.id;
  }

  refreshComments() {
    this.retrieveAll().subscribe((comments) => {
      this.comments$.next(comments);
    });
  }
}
