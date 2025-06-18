import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { AutoLogoutService } from './core/auth/auto.logout.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [FormsModule, RouterOutlet],
  })
 export class AppComponent implements OnInit {
    constructor(private auth: AuthService, private autoLogout: AutoLogoutService) {}
    name = '';
    ngOnInit(): void {
      this.auth.autoLogin().subscribe(success => {
        console.log('Auto-login status:', success);
      });
      //throw new Error('AppComponent Component initialization failed!');
    }
  }