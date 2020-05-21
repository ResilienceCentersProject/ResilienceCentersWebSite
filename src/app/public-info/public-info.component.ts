import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-public-info',
  templateUrl: './public-info.component.html',
  styleUrls: ['./public-info.component.css']
})
export class PublicInfoComponent implements OnInit {

  public subjectId="";
  public componentId;
  //public componentId=`public-info: ${this.subjectId}`;//message recieved in @input folders componant
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.subjectId=id;
    });
  this.componentId=`public-info: ${this.subjectId}`;//message recieved in @input folders componant
  }

}

