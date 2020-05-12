import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-center-by-location',
  templateUrl: './center-by-location.component.html',
  styleUrls: ['./center-by-location.component.css']
})
export class CenterByLocationComponent implements OnInit {

  //PROBLOM HERE INNER IS NOT DISPAYED IN HTML... NEEDS TAKING CARE
  public centers=[
    {"id":"ashkelon","hebName":"אשקלון","inner":[]},
    {"id":"sderot", "hebName":"שדרות","inner":[]},
    {"id":"gaza-envelope","hebName":"עוטף עזה",
      "inner":[
        {"id":"gaza-envelope1","hebName":"עוטף עזה 1"},
        {"id":"gaza-envelope2","hebName":"עוטף עזה 2"},
        {"id":"gaza-envelope3","hebName":"עוטף עזה 3"},
        {"id":"gaza-envelope4","hebName":"עוטף עזה 4"},
      ]},
    {"id":"west-bank", "hebName":"יהודה ושומרון",
      "inner":[
        {"id":"west-bank1","hebName":"שומרון 1"},
        {"id":"west-bank2","hebName":"שומרון 2"},
        {"id":"west-bank3","hebName":"שומרון 3"},
        {"id":"west-bank4","hebName":"שומרון 4"},
      ]},
    {"id":"bedouin-society","hebName":"החברה הבדואית","inner":[]},
  ];

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(center){
    this.router.navigate(['/center-by-location',center.id]);
  }

}

