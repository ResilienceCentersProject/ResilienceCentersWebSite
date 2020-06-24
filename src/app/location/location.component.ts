import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import * as $ from 'jquery';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  paramsSubscription : Subscription;
  public locationId = "";//will hold location Id user chose
  public centers;//these will change according to the tag that wants to use folder componant
  public picPath;//Will hold the path to the wanted image folder in Data Base
 
  public gazaStripCenters=[
    {"id":"ashkelon-beach","hebName":"חוף אשקלון"},
    {"id":"sderot","hebName":"שדרות"},
    {"id":"shaar-hanegev","hebName":"שער הנגב"},
    {"id":"negev-fields","hebName":"שדות נגב"},
    {"id":"eshkol","hebName":"אשכול"},
  ];

  public judeaAndSamariaCenters=[
    {"id":"benjamin","hebName":"בנימין"},
    {"id":"shomron","hebName":"שומרון"},
    {"id":"etzion","hebName":"עציון"},
    {"id":"judea","hebName":"יהודה"},
  ];

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //get id From route
    this.paramsSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      this.locationId = params.get('id');//set id
      this.setContent();//set html content
     });
  }

  //This function sets html content
  setContent(){
     if(this.locationId == 'judea-and-samaria')
      {
        this.centers = this.judeaAndSamariaCenters;
        this.picPath="/pictures/center-info/judea-and-samaria"
      }
      else//gaza-strip
      {
        this.centers = this.gazaStripCenters;
        this.picPath="/pictures/center-info/gaza-strip"
      }
  }

  //boolean for *ngIf in html
  get isJudeaAndSamariaSelcted(){
    if(this.locationId=='judea-and-samaria')
      return  true;
    return false;
  }

  //btn listener for center-button
  onSelect(center){
    this.router.navigate([`/${center.id}`]);
  }
}


