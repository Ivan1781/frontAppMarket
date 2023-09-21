import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponseDto } from '../models/register-response.dto';

@Injectable({
  providedIn: 'root'
})

export class RegistrationDataService {

  constructor(private httpClient: HttpClient) { }
  
  registerUser(userName: string, password: string): Observable<HttpResponse<RegisterResponseDto>>{
    
    const body = {userName: userName, password: password};
    console.log(`BODY ${body}`)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post<RegisterResponseDto>(
      'http://localhost:8080/api/auth/register', 
      body, 
      { headers: headers,
         observe: 'response' }
    )
  }

}
