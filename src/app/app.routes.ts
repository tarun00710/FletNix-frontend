import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { preventAuth: true },
        canActivate: [AuthGuard], 
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { preventAuth: true },
        canActivate: [AuthGuard], 
      },
      
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard], 
  },
  {
    path: 'details/:showId',
    component: VideoDetailsComponent,
    canActivate: [AuthGuard], 
  },
  { path: '**', redirectTo: '/register' },
];
