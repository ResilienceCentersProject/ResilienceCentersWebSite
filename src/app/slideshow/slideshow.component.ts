import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';

export interface Pic {
  image: string;
  title: string;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent {
  private dbData;//will hold object from firebase
  @Input() dbPath: string;
  public images: Array<Pic> = [];
  public titles: Array<Pic> = [];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private router: Router) {

  }

 ngOnInit():void{
  this.dbData=this.db.list(this.dbPath).valueChanges()
  .subscribe(data => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      this.images.push(data[i]["image"]);
      this.titles.push(data[i]["title"]);
    }
  })
 }
}

