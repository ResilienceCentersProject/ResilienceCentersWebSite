import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';

export interface Workshop {
  image: string;
  url: string;
}

@Component({
  selector: 'app-shomron',
  templateUrl: './shomron.component.html',
  styleUrls: ['./shomron.component.css']
})
export class ShomronComponent implements OnInit {
  private dbData;//will hold object from firebase

  public picPath = "/pictures/center-info/shomron";//Will hold the path to the wanted image folder in Data Base
  
  dbPath = "/workshops/shomron";//Will hold the path to the wanted workshopPath in Data Base

  public images: Array<Workshop> = [];
  public urls: Array<Workshop> = [];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
    this.dbData = this.db.list(this.dbPath).valueChanges()
      .subscribe(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          this.images.push(data[i]["image"]);
          this.urls.push(data[i]["url"]);
        }
      })
  }


}
