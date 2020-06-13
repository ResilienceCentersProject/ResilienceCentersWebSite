import { Component, OnInit } from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  // directives: [SlideshowComponent]

})
export class HomePageComponent implements OnInit {
  public picPath="/pictures/home-page";//Will hold the path to the wanted image folder in Data Base
  constructor() { }

  ngOnInit(): void {
  }

}
