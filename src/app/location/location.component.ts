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
  public locationId = "";
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
    this.paramsSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.locationId = id;
      if(id == 'judea-and-samaria')
      {
        this.centers = this.judeaAndSamariaCenters;
        this.picPath="/pictures/center-info/judea-and-samaria"
      }
      else//gaza-strip
      {
        this.centers = this.gazaStripCenters;
        this.picPath="/pictures/center-info/gaza-strip"
      }
  });
  }

  get isJudeaAndSamariaSelcted(){
    if(this.locationId=='judea-and-samaria')
      return  true;
    return false;
  }

  onSelect(center){
     this.router.navigate(['/center-info',center.id]);
  }
}


