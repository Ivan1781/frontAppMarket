import { Component } from '@angular/core';
import { UploadPhotoService } from 'src/app/services/upload-photo.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.css'],
  providers:[UploadPhotoService]
})
export class PhotoUploaderComponent {

  constructor (private uploader: UploadPhotoService) {}

  imageUrl: string | ArrayBuffer | null;
  selectedFile: File | null;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file.name)
    if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.imageUrl = e.target.result;
          };
        reader.readAsDataURL(file); 
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      console.log('Upload file ....')
      this.uploader.sendFile(this.selectedFile)
    }
    else console.log('File is absent')
  }
}