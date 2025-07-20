
import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { blogPosts } from '../../data/blog-posts';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [RouterModule, NgFor, NgIf]
})
export class BlogComponent implements OnInit, AfterViewInit  {
  blogPosts = blogPosts;

  @ViewChild('anchor', { static: false }) anchor!: ElementRef;
  private observer!: IntersectionObserver;
  
  page = 1;
  limit = 4;
  loading = false;
  hasMore = true;
  blogs: any = [];

  constructor(private blogService: BlogService, private cdr: ChangeDetectorRef) {}

  loadBlogs(): void {
    this.loading = true;
    this.blogService.getBlogs(this.page, this.limit).subscribe((data) => {
      this.blogs.push(...data);
      this.loading = false;
      if (data.length < this.limit) {
        this.hasMore = false;
      } else {
        this.page++;
      }
      this.cdr.detectChanges();
    });
  }
  trackByRoute(index: number, post: any): string {
    return post.route; // assuming route is unique
  }
  
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && this.hasMore && !this.loading) {
          this.loadBlogs();
        }
      },
      {
        root: null, // <- ✅ This tells it to observe in the body/viewport
        threshold: 0.1,
      }
    );

    if (this.anchor) {
      this.observer.observe(this.anchor.nativeElement);
    }
  }

  ngOnInit(): void {
    this.loadBlogs();
  }
}
