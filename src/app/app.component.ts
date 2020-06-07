import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "./auth/services/auth.service";
import { element, by } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  public centers=[
    {"id":"ashkelon","hebName":"אשקלון"},
    {"id":"judea-and-samaria", "hebName":"יהודה ושומרון"},
    {"id":"gaza-strip","hebName":"עוטף עזה"},
    {"id":"bedouin-society","hebName":"החברה הבדואית"},
  ];
  public subjects=[
    {"id":"fromTheNews","hebName":"מהעיתונות"},
    {"id":"inEmergency","hebName":"בחירום"},
    {"id":"infoForEducationSystems","hebName":"מידע למסגרות חינוך"},
    {"id":"infoForParentsInEmergency","hebName":"מידע להורים בשעות חירום"},
    {"id":"inRoutine","hebName":"בשגרה"},
    {"id":"volunteers","hebName":"מתנדבים"},
  ];
  
  //constructor(private router: Router, private route:ActivatedRoute, private authGuardService: AuthGuardService) { }
  constructor(private router: Router, private route:ActivatedRoute, private authService: AuthService) { }

  onSelect(center){
    if(center.id == "judea-and-samaria" || center.id == "gaza-strip"){
      this.router.navigate(['/location',center.id]);
    } else {
      this.router.navigate(['/center-info',center.id]);
    }
  }
  onSelectSubject(subject){
    this.router.navigate(['/public-info',subject.id]);

  }

  checkAuth(){
    if(this.authService.isLoggedIn){
      this.router.navigate(['/authorized-zone']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  
 // public url = item.product_image_urls.filter(arr=>arr.match("homepage")!==null)

}