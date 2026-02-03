import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = signal<any>(null);

  login(token: string, userData: any) {
    localStorage.setItem('token', token);
    this.user.set(userData);
  }

  logout() {
    localStorage.removeItem('token');
    this.user.set(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
