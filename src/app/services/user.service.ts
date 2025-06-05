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

  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  /**
   * Mocks a very basic user login and sets a value for the user subject
   */
  mockLogIn$() {
    return this._http
      .get<{ message: string; user: User }>(`${apiiUrl}users/${defaultUserId}`)
      .pipe(
        tap(({ user }) => {
          this._user.next(user);
        }),
      );
  }

  getCurrentUser() {
    return this._user.getValue();
  }
}
