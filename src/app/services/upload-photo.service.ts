import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.dto';

@Injectable({
  providedIn: 'root'
})

export class UploadPhotoService {
  constructor(private httpClient: HttpClient) { }

  sendFile(photo: File){
    console.log('uploader')
    const formData = new FormData()
    formData.append('photo', photo)
    this.httpClient.post<Photo>('http://localhost:8080/api/upload',
     formData,
     { observe: 'response' }
     ).subscribe(
      {
        next: (x)=>{
          console.log(`success ${x.status}`)
          console.log(`success ${x.body?.name}`)
        },
        error: (c)=>{
          console.log(`error ${c}`);    
          console.log(c.status)
          
        }
      }
    )
  }

}
