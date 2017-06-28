import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpPostService {

  constructor(private _http: Http) { }

  postData(user : any){
    const body= JSON.stringify(user)
     return this._http.post('https://testproject-a25a7.firebaseio.com/data.json',body)
              .map(data=>data.json());
  }
}
