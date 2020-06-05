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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.subjectId=id;
      document.getElementById("publicInfo").innerHTML = '<iframe width="100%"  scrolling="no"  onload=javascript:(function(o){o.style.height=o.contentWindow.document.documentElement.scrollHeight+"px";}(this));  frameBorder="0" src="assets/subjects/' + this.subjectId + '.html"></iframe>';
    });
  this.componentId=`public-info: ${this.subjectId}`;//message recieved in @input folders componant
  }

}

