import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { DomSanitizer } from '@angular/platform-browser';

export interface File {
  id: string,
  title: string;
  url: URL
}

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

  private dbPath = `/volunteers-pdf`;//beginig of path to realtime database
  private fileArray: Array<File> = [];//each file contains name and url

  public fileURL;//protected fileUrl
  private dbData;//will hold object from firebase

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      this.setFileArray();//set file array
    });
  }

  setFileArray() {
    this.dbData = this.db.list(this.dbPath).valueChanges()
      .subscribe(data => {

        //inject fata files in to file array
        for (let i = 0; i < data.length; i++)
          this.fileArray.push({ id: data[i]["name"], url: data[i]["url"], title: data[i]["key"]});
      })
  }

  //listener to html file selector
  onSelect(url) {
    this.fileURL = this.creatSafeURL(url);
  }

  //returns safe url for embeding
  creatSafeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //returns array of Files
  get files() {
    console.log(this.fileArray);
    return this.fileArray;
  }


}
