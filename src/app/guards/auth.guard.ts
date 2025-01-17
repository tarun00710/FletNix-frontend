import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const preventAuth = next.data['preventAuth']; 

   
    if (preventAuth && isLoggedIn) {
      this.router.navigate(['/']); 
      return false;
    }

   
    if (!isLoggedIn && !preventAuth) {
      this.router.navigate(['/login']); 
      return false;
    }

    return true; 
  }
}
