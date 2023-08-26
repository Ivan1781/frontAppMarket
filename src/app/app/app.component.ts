import { Component } from '@angular/core';
import { DescriptionCommodityService } from '../description-commodity.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DescriptionCommodityService]
})
export class AppComponent {
  data: any
  constructor(private dataService :DescriptionCommodityService) {}

  imgUrl:string = 'assets/doc.jpg'
  userData:string[] = []

  addOne(x:string){
    this.userData.push(x) 
    console.log(this.userData)
  }

  getData(){
    console.log('DATAdataDATA')
    this.dataService.get('user').subscribe((response)=>{
        this.data = response
        console.log(this.data)
    }, (error)=>{
      console.error('Service doesnt give any data', error)
    })
  }

  postData(usname: string){
    console.log("POST")
    this.dataService.post('users', usname).subscribe((response)=>{
      console.log("POST II")
      this.data = response
    })
  }
}
