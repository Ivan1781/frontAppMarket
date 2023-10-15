import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/api/auth/login');
  }
}
