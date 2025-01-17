import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { email: '', password: '',age: null  };
  message: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        this.message = '';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        this.message = 'Registration failed: ' + err.error.message || 'Please try again later.';
      },
    });
  }
}
