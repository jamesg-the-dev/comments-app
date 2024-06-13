import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, last, lastValueFrom } from 'rxjs';
import { apiiUrl, defaultUserId } from '../utilities/globals';

export interface User {
  id: number;
  username: string;
  profilePic: string;
  updatedAt: Date;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  async mockLogIn() {
    const request = this.http.get<{ message: string; user: User }>(
      `${apiiUrl}users/${defaultUserId}`,
    );
    const { user } = await lastValueFrom(request);
    this.user$.next(user);
  }

  getCurrentUser() {
    return this.user$.getValue();
  }
}
