import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

export interface Folder{
  id:string;
  name:string;
  key: string;
}

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})

//This Component is to be used only by Authorized-zone!
export class FoldersComponent implements OnInit {

  private dbPath='/folders';//path to folders in realtime data base
  private folderArray: Array<Folder>=[];//Array for folders: each folder has id and name

  searchWord: string;//the user input in the search filed

  constructor(private router: Router, private route:ActivatedRoute, private db: AngularFireDatabase) { 
    
    this.db.list(this.dbPath).valueChanges()
    .subscribe(data => {

      //inject data foler content in to folderArray:
      for( let i=0; i< data.length; i++){
        this.folderArray.push({id: data[i]["id"], name: data[i]["name"], key: data[i]["key"]});

      }

    })
  }

  ngOnInit(): void {}

  //returns array of folders
  getFolders(){
    return this.folderArray;
  }

  //on folder click listerner
  onSelect(folder){
    this.router.navigate(['/files',folder.id],{relativeTo:this.route});
  }

}
