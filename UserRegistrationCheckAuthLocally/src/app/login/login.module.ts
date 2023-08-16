import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';



@NgModule({
  declarations: [
    UserloginComponent,
    UserregistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserloginComponent,
    UserregistrationComponent,
  ],
})
export class LoginModule { }
