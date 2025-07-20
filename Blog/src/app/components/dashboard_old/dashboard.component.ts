import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  imports: [RouterModule],
  template: `
    <h1>{{ title }}</h1>
    <p>This is the homepage of your blog application.</p>
    <a routerLink="/blog">Go to Blog</a>
  `,
  styles: ``
})
export class DashboardComponent {
  title = 'Welcome to the Blog!'; 
}
