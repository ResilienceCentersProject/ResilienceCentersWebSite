import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  public folders=[//these will change according to the tag that wants to use folder componant
    {"id":"folder1" ,"name":"folder 1"},
    {"id":"folder2" ,"name":"folder 2"},
    {"id":"folder3" ,"name":"folder 3"},
    {"id":"folder4" ,"name":"folder 4"},
  ];

  @Input() public parentData;/*must be the same as in the parent- this tag is located at team-info, public-info and login*/
  
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(folder){
    this.router.navigate(['/folders',this.parentData+"/"+folder.id]);
  }

}
