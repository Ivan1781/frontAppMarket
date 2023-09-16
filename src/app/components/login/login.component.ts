import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponceTokenDto } from 'src/app/models/response-token.dto';
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

  constructor(private loginDataService: LoginDataService, private router: Router){}

  sendData(){
    
    const a: Observable<AuthResponseDTO> = this.loginDataService.loginUser(this.login, this.password)
    a.subscribe({
      next: (response) => {
        console.log(`Token of response: ${response.accessToken}`)
        // if (response.status === "200"){
          // this.router.navigateByUrl('/api/userrrr')
        // }
      },
      error: (error)=> {console.log(error)}

  })
  }
}