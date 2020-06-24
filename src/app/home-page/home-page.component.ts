import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements OnInit {
  public picPath="/pictures/home-page";//Will hold the path to the wanted image folder in Data Base
  public isCollapsed = true;//boolean for text collapse in html

  constructor() { }

  ngOnInit(): void {
  }

}
