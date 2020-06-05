import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-center-info',
  templateUrl: './center-info.component.html',
  styleUrls: ['./center-info.component.css']
})
export class CenterInfoComponent implements OnInit {
  public centerId = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.centerId = id;
      document.getElementById("center-info").innerHTML = '<iframe width="100%"  scrolling="no"  onload=javascript:(function(o){o.style.height=o.contentWindow.document.documentElement.scrollHeight+"px";}(this));  frameBorder="0" src="assets/centers/' + this.centerId + '.html"></iframe>';
    });
  }

}