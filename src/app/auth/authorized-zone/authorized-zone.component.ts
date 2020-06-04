import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-authorized-zone',
  templateUrl: './authorized-zone.component.html',
  styleUrls: ['./authorized-zone.component.css']
})
export class AuthorizedZoneComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

  }

  //btn logout listener
  logout() {
    this.authService.logout();
  }


}
