import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  
  public locationId="";
  public centers:Array<{id:string, hebName:string}>;

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.locationId=id;

      if(this.locationId == "west-bank"){
        this.centers=[
          {"id":"binyamin","hebName":"בנימין"},
          {"id":"yehuda","hebName":"יהודה"},
          {"id":"etzion","hebName":"עציון"},
          {"id":"samaria","hebName":"שומרון"},
        ];
      }
  
      if(this.locationId == "gaza-envelope"){
        this.centers=[
          {"id":"gaza-envelope-1","hebName":"עוטף-עזה-1"},
          {"id":"gaza-envelope-2","hebName":"עוטף-עזה-2"},
          {"id":"gaza-envelope-3","hebName":"עוטף-עזה-3"},
          {"id":"gaza-envelope-4","hebName":"עוטף-עזה-4"},
        ];
      }
    });

  }

  onSelect(center){
    this.router.navigate(['/center-by-location',center.id]);
  }

}
//might be in use later. dont erase.

