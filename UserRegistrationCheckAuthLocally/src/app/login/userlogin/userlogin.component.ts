import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RegserviceService } from 'src/app/services/regservice.service';
import { WhologinService } from 'src/app/services/whologin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {


  myvar:number;

  constructor(private service:RegserviceService,private app:AppComponent,private loginuserd:WhologinService){}
  uIUserName:string;
  uIPassWord:string;

  login(){
    if(this.service.isUserAlreadyPresentInService(this.uIUserName)==false){
      window.alert("User not found");
      
    }
    else{
      let loginuser=this.service.getUserFromUsername(this.uIUserName);
      if(loginuser.firstName==this.uIUserName&& loginuser.setPass==this.uIPassWord){
        window.alert("login successful");
        this.app.isLoginSuccess=1;
        this.loginuserd.setData(loginuser);
      }
      else{
        window.alert("login unsuccessful");
      }
    }
  }

  

}
