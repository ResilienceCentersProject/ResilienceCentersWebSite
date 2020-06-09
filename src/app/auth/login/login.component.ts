import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { }
  
  //listener to login button
  login() {
    //this.authService.login(this.email, this.password);
    this.authService.login("itcresilience@gmail.com", this.password);
    this.email = this.password = '';//empry strings
  }
}
