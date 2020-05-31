import { Component, OnInit } from '@angular/core';



//import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
//import {ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-authorized-zone',
  templateUrl: './authorized-zone.component.html',
  styleUrls: ['./authorized-zone.component.css']
})
export class AuthorizedZoneComponent implements OnInit {

 

  // private logMessage = "התחבר";
  // private code="123";//If you think you are smart you are not :) THIS CODE IS VISABLE TO ALL !!!!!

  // //public componentId="authorized-zone";//message recieved in @input folders componant
  // constructor(private router: Router, private authGuardService: AuthGuardService) { }

  ngOnInit(): void {

  }

  // public get_loggedIn(){
  //   return this.authGuardService.isLoggedIn;
  // }
  // public get_logMessage(){
  //   return this.logMessage;
  // }
  // public check_code(value){
  //   if(value == this.code)
  //   {
  //     this.authGuardService.isLoggedIn=true;
  //     this.logMessage="התנתק";
  //     //allow routing from folders to authrized zone
  //     //check that user cant use router to get to authorized zone without password 
  //   }
  //   else
  //   {
  //     alert("הסיסמא שגויה :(");
  //   }
  // }
  // public logout()
  // {
  //   this.authGuardService.isLoggedIn=false;
  //   this.logMessage="התחבר";
  //   //if user is in autherised zone  -> go to home_page
  // }
  // public check_loggedIn()
  // {
  //   if(this.authGuardService.isLoggedIn)
  //     this.router.navigate(['/authorized-zone']);
  // }





}
