import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { RegserviceService } from 'src/app/services/regservice.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  constructor(public service:RegserviceService){

  }
  regserviceService:User= new User();
  registerUserData:User=new User();

  registerUser(){
    if(this.registerUserData.firstName==undefined||this.registerUserData.lastName==undefined||this.registerUserData.email==undefined||this.registerUserData.address==undefined||this.registerUserData.setPass==undefined)
    {
      window.alert("all feild are mindatory");
    }
    else{
      if(this.service.isUserAlreadyPresentInService(this.regserviceService.firstName)==true){
        window.alert("already user register");
      }
      else{
        this.service.setUserInService(this.regserviceService);
        window.alert("Registration Successful");
        this.regserviceService= new User();
      }
      
    }
    }
    
    

}
