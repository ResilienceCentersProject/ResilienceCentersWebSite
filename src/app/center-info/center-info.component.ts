import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-center-info',
  templateUrl: './center-info.component.html',
  styleUrls: ['./center-info.component.css']
})
export class CenterInfoComponent implements OnInit {

  public centerId="";
  public temp_isSamaria;//temporary
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.centerId=id;
      if(id == "samaria"){
        this.temp_isSamaria=true;//temporary
      }
      else{
        this.temp_isSamaria=false;//temporary
      }
    });
  }

}
