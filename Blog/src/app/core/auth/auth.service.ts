import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  private accessToken: string | null = null;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ accessToken: string }>(`${this.baseUrl}/login`, { email, password }, { withCredentials: true })
      .pipe(
        tap(res => this.accessToken = res.accessToken),
        map(() => true)
      );
  }
  register(email: string, password: string, role: string ): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { email, password, role });
  }
  refreshToken(): Observable<boolean> {
    return this.http.post<{ accessToken: string }>(`${this.baseUrl}/refresh`, {}, { withCredentials: true }).pipe(
      tap(res => this.accessToken = res.accessToken),
      map(() => true),
      catchError(() => {
        this.logout();
        return of(false);
      })
    );
  }

  autoLogin(): Observable<boolean> {
    return this.refreshToken();
  }

  logout(): void {
    this.accessToken = null;
    this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  getToken(): string | null {
    return this.accessToken;
  }
  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }
  isLoggedIn(): boolean {
    return !!this.accessToken;
  }
  hasRole(role: string): boolean {
    return this.currentUser?.role === role;
  }
}
