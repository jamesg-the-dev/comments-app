import { Component, inject, OnInit } from '@angular/core';
import { CommentChainComponent } from './components/comment-chain/comment-chain.component';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { CommentBoxComponent } from './modules/comment/comment-box/comment-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommentChainComponent, CommonModule, CommentBoxComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private _userService = inject(UserService);

  userLoaded = false;
  avatar = '';

  ngOnInit(): void {
    this.mockLogin();
  }

  /** This is a method that kind of mocks a login so it can globally set the "current user" */
  mockLogin() {
    this._userService.mockLogIn$().subscribe({
      next: () => {
        this.userLoaded = true;
        this.avatar = this._userService.getCurrentUser()?.profilePic ?? '';
      },
    });
  }
}
