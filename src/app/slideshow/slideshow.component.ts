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
  @Input() dbPath: string;//input from the differnt components containing slideshow
  public images: Array<Pic> = [];//url image array for html
  public titles: Array<Pic> = [];//title image array for html

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private router: Router) { }

 ngOnInit():void{
   //get piture data
  this.dbData=this.db.list(this.dbPath).valueChanges()
  .subscribe(data => {
    for (let i = 0; i < data.length; i++) {
      this.images.push(data[i]["image"]);
      this.titles.push(data[i]["title"]);
    }
  })
 }

 //destroy firebaseData before exit
 ngOnDestroy(){
  this.dbData.unsubscribe();
}
}



