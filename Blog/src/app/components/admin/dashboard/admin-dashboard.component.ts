import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <h2>Dashboard Overview</h2>
      <div class="cards">
        <div class="card">Users: 120</div>
        <div class="card">Posts: 78</div>
        <div class="card">Comments: 245</div>
      </div>
    </div>
  `,
  styles: [`
    .admin-page h2 {
      margin-bottom: 1rem;
    }
    .cards {
      display: flex;
      gap: 1rem;
    }
    .card {
      flex: 1;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
    }
  `]
})
export class AdminDashboardComponent {}