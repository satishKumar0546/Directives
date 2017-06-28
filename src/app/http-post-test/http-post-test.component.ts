import { Component } from '@angular/core';
import { HttpPostService } from './http-post.service';
@Component({
  selector: 'dir-http-post-test',
  templateUrl: './http-post-test.component.html',
  styleUrls: ['./http-post-test.component.css']
})
export class HttpPostTestComponent  {

  constructor(private _httpService : HttpPostService) { }
  postData(name:string, email:string){
      this._httpService.postData({name: name, email:email})
        .subscribe(
          data=>console.log(data)
      );
  }

}
