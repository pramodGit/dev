
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { blogPosts } from '../../data/blog-posts';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [FormsModule, NgIf, NgFor]
})
export class AdminBlogComponent implements OnInit {
  blogPosts: BlogPost[] = blogPosts;
  editMode = false;
  currentPost: BlogPost = {
    title: '', 
    summary: '',
    id: 0,
    route: ''
  };

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    console.log('admin');
    //this.loadPosts();
  }

  loadPosts(): void {
    //this.blogService.getPosts().subscribe(posts => this.blogPosts = posts);
    this.blogPosts;
  }

  onEdit(post: BlogPost): void {
    this.editMode = true;
    this.currentPost = { ...post }; // clone to avoid mutation
  }

  onDelete(id?: number): void {
    if (id) {
      this.blogService.deletePost(id).subscribe(() => this.loadPosts());
    }
  }

  onSubmit(): void {
    if (this.editMode && this.currentPost.id) {
      this.blogService.updatePost(this.currentPost.id, this.currentPost).subscribe(() => {
        this.resetForm();
        this.loadPosts();
      });
    } else {
      this.blogService.createPost(this.currentPost).subscribe(() => {
        this.resetForm();
        this.loadPosts();
      });
    }
  }

  resetForm(): void {
    this.editMode = false;
    this.currentPost = { 
      title: '', 
      summary: '',
      id: 0,
      route: '' 
    };
  }
}
