import { Component } from '@angular/core';
import { WhologinService } from '../services/whologin.service';
import { AppComponent } from '../app.component';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public loginser:WhologinService, private app:AppComponent){}
  logout(){
    this.app.isLoginSuccess=0;
    this.loginser.setData(new User)
  }

}
