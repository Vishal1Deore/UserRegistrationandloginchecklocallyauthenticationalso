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
  RegserviceService:User= new User();
  //RegserviceService:User=new User();

  registerUser(){
    if(this.RegserviceService.firstName==null||this.RegserviceService.lastName==undefined)
    {
      window.alert("all feild are mindatory");
    }
    else{
      if(this.service.isUserAlreadyPresentInService(this.RegserviceService.firstName)==true){
      window.alert("already user register");
    }
    else{
      this.service.setUserInService(this.RegserviceService);
      window.alert("Registration Successful");
      this.RegserviceService= new User();
    }
    
  }
    }
    
    

}
