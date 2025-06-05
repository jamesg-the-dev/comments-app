import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
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
  private _http = inject(HttpClient);

  readonly user$ = new BehaviorSubject<User | null>(null);

  mockLogIn$() {
    return this._http
      .get<{ message: string; user: User }>(`${apiiUrl}users/${defaultUserId}`)
      .pipe(
        tap(({ user }) => {
          this.user$.next(user);
        }),
      );
  }

  getCurrentUser() {
    return this.user$.getValue();
  }
}
