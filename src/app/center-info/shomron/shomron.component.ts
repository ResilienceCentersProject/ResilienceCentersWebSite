import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shomron',
  templateUrl: './shomron.component.html',
  styleUrls: ['./shomron.component.css']
})
export class ShomronComponent implements OnInit {
  public picPath="/pictures/center-info/shomron";//Will hold the path to the wanted image folder in Data Base

  constructor() { }

  ngOnInit(): void {
  }

}
