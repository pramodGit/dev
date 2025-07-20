import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()" #form="ngForm" class="auth-form">
      <h1 class="title">Sign In <a routerLink="/register">Register</a></h1>
      <ul>
        <li><input [(ngModel)]="email" name="email" placeholder="Email" required></li>
        <li><input [(ngModel)]="password" name="password" placeholder="Password" type="password" required></li>
      </ul>
      <button type="submit">Login</button>
    </form>
  `,
  imports: [FormsModule, RouterModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/dashboard']);
      }
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials or server error');
      }
    });
    return false;
  }
}
