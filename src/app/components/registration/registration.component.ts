import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationDataService } from 'src/app/services/registration-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'], 
  providers: [RegistrationDataService]
})

export class RegistrationComponent {
  login:string = ''
  password:string = ''
  error:  string = ''
  constructor (private registr: RegistrationDataService, private router: Router ){}

  signUp(){
    console.log(`USER ${this.login} - ${this.password}`)
    this.registr.registerUser(this.login, this.password)
      .subscribe({
        next: (resp)=> {
          console.log(`Status of request ${resp.status}`)
          this.router.navigateByUrl('/api/auth/login')
        },
        error: (error)=>{
          this.error = "Oh, shit. You screw up. Try again"
          console.log(error)
        }
      }
    )
  }
}
