import { Component, OnInit } from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  // directives: [SlideshowComponent]

})
export class HomePageComponent implements OnInit {
  public picPath="/pictures/home-page";
  constructor() { }

  ngOnInit(): void {
  }

}
