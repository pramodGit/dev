import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AutoLogoutService {
  private timer: any;
  private timeoutDuration = 15 * 60 * 1000; // 15 minutes

  constructor(private auth: AuthService, private router: Router) {
    //this.initListener();
  }

  private initListener() {
    ['click', 'mousemove', 'keydown'].forEach(event =>
      document.addEventListener(event, () => this.resetTimer())
    );
    this.startTimer();
  }

  private startTimer() {
    this.timer = setTimeout(() => {
      this.auth.logout();
      this.router.navigate(['/login']);
    }, this.timeoutDuration);
  }

  private resetTimer() {
    clearTimeout(this.timer);
    this.startTimer();
  }
}
