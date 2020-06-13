import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  public centers;//these will change according to the tag that wants to use folder componant

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

  //@Input() public parentData;/*must be the same as in the parent- this tag is located at team-info, public-info and login*/

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      if(id == 'judea-and-samaria')
        this.centers = this.judeaAndSamariaCenters;
      else
        this.centers = this.gazaStripCenters;
    });

  }

  onSelect(center){
     this.router.navigate(['/center-info',center.id]);
  }

}


