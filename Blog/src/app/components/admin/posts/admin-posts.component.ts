import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-posts',
  imports: [CommonModule],
  template: `
    <div class="admin-page">
      <h2>Manage Blog Posts</h2>
      <button class="btn">+ Add New Post</button>
      <ul class="post-list">
        <li *ngFor="let post of posts">
          {{ post.title }}
          <button>Edit</button>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .btn {
      margin-bottom: 1rem;
      background-color: #2ed573;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
    }
    .post-list {
      list-style: none;
      padding: 0;
    }
    .post-list li {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem;
      background: white;
      margin-bottom: 0.5rem;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    button {
      margin-left: 0.5rem;
    }
  `]
})
export class AdminPostsComponent {
  posts = [
    { title: 'Understanding Angular Routing' },
    { title: 'RxJS Essentials' },
    { title: 'Optimizing Angular Performance' },
  ];
}
