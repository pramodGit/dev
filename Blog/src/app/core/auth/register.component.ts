import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <form (ngSubmit)="register()" class="auth-form">
      <h1 class="title">Register New User <a routerLink="/login">Sign In</a></h1>
      <ul>
        <li><input [(ngModel)]="user.email" name="email" placeholder="Email" required></li>
        <li><input [(ngModel)]="user.password" name="password" placeholder="Password" type="password" required></li>
        <li>
          <select [(ngModel)]="user.role" name="role">
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>
        </li>
      </ul>
      <button type="submit">Register</button>
    </form>
  `,
  imports: [FormsModule, RouterModule]
})
export class RegisterComponent {
  user: User = { email: '', password: '', role: 'User' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user.email, this.user.password, this.user.role).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/login']);
      }
      },
      error: (err) => {
        console.error('Registration failed:', err);
      }
    });
    return false;
  }
}
