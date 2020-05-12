import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-authorized-zone',
  templateUrl: './authorized-zone.component.html',
  styleUrls: ['./authorized-zone.component.css']
})
export class AuthorizedZoneComponent implements OnInit {

  public componentId="authorized-zone";//message recieved in @input folders componant
  //constructor(private router: Router, private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit(): void {

  }

  /*/Uses children rout to navigate to folders. The needs to be a way to inforom folders the rout came from login
  //In team-info and public-info this information is given using @input because folders is a child component/
  //Maybe making folders a router-outlet was not such a good idea
  showFolders(){
    this.router.navigate(['folders'],{relativeTo:this.route})
  }*/



}
