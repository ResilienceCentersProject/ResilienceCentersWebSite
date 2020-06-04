import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "./auth/services/auth.service";

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
    {"id":"subject-1","hebName":"נושא-1"},
    {"id":"subject-2","hebName":"נושא-2"},
    {"id":"subject-3","hebName":"נושא-3"},
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
  

}