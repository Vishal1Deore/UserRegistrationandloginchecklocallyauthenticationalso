import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor() { }

  registerUser:User[]=[];

  setUserInService(user:User){
    this.registerUser.push(user);
  }

  isUserAlreadyPresentInService(username:string){
    for(let i=0;i<this.registerUser.length;i++){
      let tempuser=this.registerUser[i];
      if(tempuser.firstName==username)
      return true;
    }
    return false;
  }
}
