import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent {
  constructor(private router: Router){}
  
  isShown:boolean = true;

  goToRegister(){
    this.isShown=false;
    this.router.navigate(['/api/auth/register']);
  }

  goToLogin(){
    this.isShown=false;
    this.router.navigate(['/api/auth/login']);
  }
}
