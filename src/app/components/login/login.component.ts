import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseDTO } from 'src/app/models/token.dto';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginDataService]
})
export class LoginComponent {
  login:string = ''
  password:string = ''
  error:  string = ''

  constructor(private loginDataService: LoginDataService, private router: Router){}

  sendData(){
    const loginReaponse: Observable<HttpResponse<AuthResponseDTO>> = this.loginDataService
    .loginUser(this.login, this.password)
    loginReaponse.subscribe({
      next: (response) => {
          if (response.status == 200){
            const jwtToken = localStorage.setItem('token',
             `${response.body?.tokenType} ${response.body?.accessToken}`);
            this.router.navigateByUrl('/api/user')
          }
        },
      error: (error)=> {
        this.error = "Oh, shit. You screw up. Try again"
        console.log(error)}
    })
  }
}