import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.css']
})
export class PublicInfoComponent implements OnInit {

  public componentId="public-info";//message recieved in @input folders componant
  constructor() { }

  ngOnInit(): void {
  }

}
