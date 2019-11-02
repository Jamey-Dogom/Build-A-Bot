import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) { }

  // create User
  addUser(newUser : any){
    return this._http.post('/api/users', newUser);
  }

  // read User
  getUser(findUserId : any){
    return this._http.get('/api/users/' + findUserId);
  }

  getUserByEmail(findUserEmail : any){
    return this._http.get('/api/users/email/' + findUserEmail);
  }

}


