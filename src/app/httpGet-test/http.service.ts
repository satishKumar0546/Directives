import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {
  private _url='/src/app/httpGet-test/dummy.json';
  constructor(private _http : Http) { }

  getDate(){
    return this._http.get(this._url);
     // .map((data : Response)=> data.json());
    //return this._http.get('http://date.jsontest.com/');
    //return this._http.get('https://testproject-a25a7.firebaseio.com/title.json');


      }

}
