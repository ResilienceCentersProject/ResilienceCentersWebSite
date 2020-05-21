/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
//this component will be used by home-page and public-info
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent  {
  name = 'Angular';
  imageObject = [{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'הכשרה בשמירה עצמית למתנדבי מד"א שומרון'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
    image: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
    thumbImage: 'http://up419.siz.co.il/up3/zyntmihymyfg.jpeg',
  title: 'test'
  },{
  image: '',
  thumbImage: '',
  title: 'test'
  },{
  image: '',
  thumbImage: '',
  title: 'test'
  },{
  image: '',
  thumbImage: '',
  title: 'test'
  }];
}
