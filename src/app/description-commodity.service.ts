import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescriptionCommodityService {
  private baseUrl = 'http://localhost:8080'
  constructor(private client: HttpClient) { }

  get(endpoint: string): Observable<any>{
    return this.client.get(`${this.baseUrl}/${endpoint}`)
  }

  post(endpoint: string, usname: string): Observable<any>{
    const datas = {name:usname}
    return this.client.post(`${this.baseUrl}/${endpoint}`, datas)
  }

}
