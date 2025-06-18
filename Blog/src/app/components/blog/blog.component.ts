
import { Component, OnInit } from '@angular/core';
import { blogPosts } from '../../data/blog-posts';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [RouterModule, NgFor]
})
export class BlogComponent implements OnInit {
  blogPosts = blogPosts;

  constructor() {}

  ngOnInit(): void {
    console.log('Blog Component Init');
  }
}
