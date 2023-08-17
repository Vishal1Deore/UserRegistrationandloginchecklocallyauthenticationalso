import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor() { }

  registerUser:User[]=[];

  getUserFromUsername(firstName:string){
    for(let i=0;i<this.registerUser.length;i++){
      let tempuser=this.registerUser[i];
      if(tempuser.firstName==firstName)
      return tempuser;
    }
    return null;
  }

  setUserInService(user:User){
    this.registerUser.push(user);
  }

  isUserAlreadyPresentInService(firstName:string){
    for(let i=0;i<this.registerUser.length;i++){
      let tempuser=this.registerUser[i];
      if(tempuser.firstName==firstName)
      return true;
    }
    return false;
  }
}
