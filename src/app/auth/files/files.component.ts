import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { AngularFireDatabase } from '@angular/fire/database';
import { DomSanitizer } from '@angular/platform-browser';

export interface File{
  name:string, 
  url:URL
  key: string;
  type:string;
}

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})

//This Component is to be used only by Authorized-zone!
export class FilesComponent implements OnInit {

  private folderId="";//holds folder.id from witch file need to be retrieved
  private dbPath=`/folders`;//beginig of path to realtime database

  private fileArray: Array<File>=[];//each file contains name and url
  private fileSelected=false;//set to true if a html file selected

  public fileURL;//protected fileUrl
  private dbData;//will hold object from firebase

  searchWord: string;//the user input in the search filed

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{

      this.folderId=params.get('id');//get folder-id
      this.dbPath+=`/${this.folderId}/files`;//add end of path
      this.setFileArray();//set file array

    });
  }

  //this function gets data from realtime database and sets the array of files
  setFileArray(){
    
    this.dbData=this.db.list(this.dbPath).valueChanges()
    .subscribe(data => {

      //inject fata files in to file array
      for(let i=0; i< data.length; i++){
        this.fileArray.push({name: data[i]["name"], url: data[i]["url"], key: data[i]["key"], type: data[i]["type"]});
      }
    
    })
  }

  //listener to html file selector
  onSelect(url){
    this.fileSelected=true;
    this.fileURL=this.creatSafeURL(url);
  }

  //returns safe url for embeding
  creatSafeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //returns array of Files
  get files(){
    return this.fileArray;
  }

  //return true if html file was selected
  get isSelected(){
    return this.fileSelected;
  }

  //https://www.iconfinder.com/search/?q=mp4&from=homepage For icon
  getIcon(type:string){
    if(type === "mp4"){
      return "https://cdn3.iconfinder.com/data/icons/hoya/Movies%20Folder.png"
    }
    else{
      return "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/27_Pdf_File_Type_Adobe-512.png"
    }
  }

  //listener for close-pfd btn 
  closePdf(){
    this.fileSelected=false;
  }


  //destroy firebaseData before logging out
  ngOnDestroy(){
    this.dbData.unsubscribe();
  }


}
