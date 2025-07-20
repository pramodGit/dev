import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule]
})
export class LayoutComponent { 
  title = 'Welcome to the Blog!';
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  // isTitleRoute(): boolean {
  //   return ['/dashboard', '/'].includes(this.currentRoute);
  // }

}
