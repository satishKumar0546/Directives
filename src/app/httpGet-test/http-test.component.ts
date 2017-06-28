import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'dir-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor(private _httpService : HttpService) { }

  data : any;
  getData() {
    console.log('data : ' + this.data[0]);
  }
  ngOnInit() {
    this._httpService.getDate()
           .subscribe(
                  (data)=>{this.data=data.json(); console.log(data.json())},
                   error=> alert("Failed"),
                    ()=> console.log('completed')
            );
  }

}
