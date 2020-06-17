import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benjamin',
  templateUrl: './benjamin.component.html',
  styleUrls: ['./benjamin.component.css']
})
export class BenjaminComponent implements OnInit {

  public picPath="/pictures/center-info/benjamin";//Will hold the path to the wanted image folder in Data Base

  constructor() { }

  ngOnInit(): void {
  }

}
