import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' ,age: null};
  message: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.message = ''; 
        localStorage.setItem('token', response.token); 
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Login failed', err);
        this.message = err.error.message || 'Login failed: Please try again later.';
      },
    });
  }
}
