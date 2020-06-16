import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';

export interface Pic {
  //id: string;
  image: string;
  thumbImage: string;
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

  //private dbPath ='/pictures/center-info/samaria'; //path to pictures in realtime data base
  public picArray: Array<Pic> = [];//Array for pics: each folder has id and name
  
  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private router: Router) { 
    // this.db.list(this.dbPath).valueChanges()
    //   .subscribe(data => {

    //     //inject data pic content in to picArray:
    //     for (let i = 0; i < data.length; i++) {
    //       // this.picArray.push({ image: data[i]["image"], thumbImage: data[i]["thumbImage"], title: data[i]["title"] });
    //       this.picArray.push({ thumbImage: data[i]["thumbImage"], title: data[i]["title"]});
          
    //     }
    //   })
    //   console.log(this.picArray);
    //   //console.log(this.picArray[0].thumbImage);
  }

  ngOnInit(): void {
    this.dbData=this.db.list(this.dbPath).valueChanges()
      .subscribe(data => {
        //inject data pic content in to picArray:
        for (let i = 0; i < data.length; i++) {
          this.picArray.push({ image: data[i]["image"],thumbImage: data[i]["thumbImage"], title: data[i]["title"]});
          
        }
      })
      console.log(this.picArray);
   }

  //returns array of pics
  getPics() {
    return this.picArray;
  }

   //destroy firebaseData 
   ngOnDestroy(){
    this.dbData.unsubscribe();
  }

}
