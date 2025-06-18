import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { blogPostDetails, closureCode } from '../../data/blog-posts';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [RouterModule, NgFor, NgIf]
})
export class PostComponent implements OnInit {
  postId!: string | null;
  postRoute!: string | null;
  blogPostDetails: Record<string, any> = blogPostDetails;
  postDetails: any;
  codeBlock: SafeHtml;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.codeBlock = this.sanitizer.bypassSecurityTrustHtml(closureCode);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const route = this.route.snapshot.paramMap.get('route');
    
    if (id && this.blogPostDetails[id]) {
      this.postId = id;
      this.postRoute = route;
      this.postDetails = this.blogPostDetails[id];
    } else {
      console.error('Invalid or missing post ID');
    }
  }
}
