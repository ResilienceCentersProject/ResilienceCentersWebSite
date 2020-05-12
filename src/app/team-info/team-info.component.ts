import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  public componentId="team-info";//message recieved in @input folders componant
  constructor() { }

  ngOnInit(): void {
  }

}
