import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentChainComponent } from './components/comment-chain/comment-chain.component';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommentChainComponent,
    CommentBoxComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comments-app';
  userLoaded = false;

  constructor(private userService: UserService) {
    this.mockLogin();
  }

  /** This is a method that kind of mocks a login so it can globally set the "current user" */
  async mockLogin() {
    await this.userService.mockLogIn();
    this.userLoaded = true;
  }
}
