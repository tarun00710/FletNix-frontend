import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://fletnix-backend-f574.onrender.com/api/auth'; 

  constructor(private http: HttpClient) {}

  register(user: { email: string; password: string,age:number | null }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: { email: string; password: string , age:number| null }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }


  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  logout(): void {
    localStorage.removeItem('token'); 
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); 
  }
}
