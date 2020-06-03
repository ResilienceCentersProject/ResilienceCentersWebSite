import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators'


export interface Folder{
  name:string;
  id:string;
}

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  private dbPath='/folders';

  folders: Observable<any[]>|any;
  folderArray: Array<{id:string, name:string}>=[];
  
  
  constructor(private router: Router, private route:ActivatedRoute, private db: AngularFireDatabase) { 
    this.folders= db.list(this.dbPath).valueChanges()
    .subscribe(data => {

      console.log(data);
      console.log(data[0]["name"]);
      console.log(data[0]["id"]);
      console.log(data.length);
      let i;
      for( i=0; i< data.length; i++){
        this.folderArray.push({id: data[i]["id"], name: data[i]["name"]});
      }

      console.log(this.folderArray);
    })
  }

  



  

  // getFolderList(){
  //   this.folders.snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({name:c.payload.key}))
  //     )
  //   )
  // }
  

  // public folders=[//these will change according to the tag that wants to use folder componant
  //   {"id":"folder1" ,"name":"folder 1"},
  //   {"id":"folder2" ,"name":"folder 2"},
  //   {"id":"folder3" ,"name":"folder 3"},
  //   {"id":"folder4" ,"name":"folder 4"},
  // ];


  ngOnInit(): void {
    //console.log(this.folders);
  }

  onSelect(folder){
    this.router.navigate(['/folders',folder.id]);
  }

}
