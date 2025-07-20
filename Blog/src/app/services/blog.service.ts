
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { environment } from '../../environments/environment';
import { blogPosts } from '../data/blog-posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = `${this.baseUrl}/blogs`;
  private posts = blogPosts;

  constructor(private http: HttpClient) {}

  getBlogs(page: number, limit: number): Observable<any[]> {
    const safePage = Math.max(1, page); // Ensures at least 1
    const start = (safePage - 1) * limit;
    const end = start + limit;

    console.log(`Fetching blogs for page=${safePage}, limit=${limit}`);
    console.log(`Slice from ${start} to ${end}`);

    const paginated = this.posts.slice(start, end);
    return of(paginated);
  }

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.apiUrl, post);
  }

  updatePost(id: number, post: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
