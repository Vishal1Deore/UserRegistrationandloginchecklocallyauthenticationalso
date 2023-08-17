import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserRegistrationCheckAuthLocally';
  whatToShow:number;

  isLoginSuccess=0;

  showData(num:number){
    this.whatToShow=num;
  }
  
}
