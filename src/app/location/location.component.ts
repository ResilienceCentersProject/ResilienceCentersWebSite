import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import * as $ from 'jquery';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  public locationId = "";
  public centers;//these will change according to the tag that wants to use folder componant
  public picPath="/pictures/center-info/";//Will hold the path to the wanted image folder in Data Base

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
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.locationId = id;
      this.picPath+=`${this.locationId}`;
      if(id == 'judea-and-samaria')
        this.centers = this.judeaAndSamariaCenters;
      else//gaza-strip
        this.centers = this.gazaStripCenters;
      $("#location").load(`assets/location/${this.locationId}.html`);
    });
  }

  onSelect(center){
     this.router.navigate(['/center-info',center.id]);
  }

}


