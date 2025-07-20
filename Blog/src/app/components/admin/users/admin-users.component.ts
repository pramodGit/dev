import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-users',
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <h2>Manage Users</h2>
      <table class="user-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .user-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    .user-table th, .user-table td {
      padding: 0.75rem;
      border: 1px solid #ccc;
      text-align: left;
    }
    .user-table th {
      background-color: #f1f2f6;
    }
    button {
      margin-right: 0.5rem;
    }
  `]
})
export class AdminUsersComponent {
  users = [
    { email: 'admin@example.com', role: 'Admin' },
    { email: 'user1@example.com', role: 'Editor' },
    { email: 'user2@example.com', role: 'Viewer' },
  ];
}
