import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  serviceUrl: string = "http://localhost:3004/api/users/";

  constructor(private http: HttpClient) { }

  getUserById(_id){
    return this.http.get(this.serviceUrl+_id);
  }
    addUser(name, email, password) {
    let newUser = {
      name:name,
      email: email, 
      password: password,
      
    }
   

    console.log(newUser);
    return this.http.post(this.serviceUrl, newUser);
    

  }


}
