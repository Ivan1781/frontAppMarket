import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponceTokenDto } from '../models/response-token.dto';
import { AuthResponseDTO } from '../models/token.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private httpClient: HttpClient) { }

  loginUser(user:string, password: string): Observable<AuthResponseDTO> {
    console.log(`User: ${user} - ${password}`)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {username: user, password: password}
    return this.httpClient.post<AuthResponseDTO>('http://localhost:8080/api/auth/login', body, {headers: headers});
    
    
}

  saveToken(resp: Observable<ResponceTokenDto>):any{
      resp
        .subscribe({
          next: (x)=>{
            
            // console.log(x.status)
            // console.log(x.token)
            // const accessToken = x.accessToken
            // localStorage.setItem('accessToken', accessToken)  
            return true
          },
          error: (error)=>{
            console.error('Login failed:', error)
            return false
          }   
        }
      )
      console.log("ddd")
  }
}
