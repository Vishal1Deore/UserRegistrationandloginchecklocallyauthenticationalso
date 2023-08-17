import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class WhologinService {

  constructor() { }

  loginUser:User;
  getData(){
    return this.loginUser;
  }
  setData(user:User){
    this.loginUser=user;
  }
}
