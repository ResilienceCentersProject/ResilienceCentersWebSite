import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  private logMessage = "התחבר";
  private code="123";//If you think you are smart you are not :) THIS CODE IS VISABLE TO ALL !!!!!

  public centers=[
    {"id":"ashkelon","hebName":"אשקלון"},
    {"id":"sderot", "hebName":"שדרות"},
    {"id":"gaza-envelope-1","hebName":"1-עוטף עזה"},
    {"id":"gaza-envelope-2","hebName":"2-עוטף עזה"},
    {"id":"gaza-envelope-3","hebName":"3-עוטף עזה"},
    {"id":"gaza-envelope-4","hebName":"4-עוטף עזה"},
    {"id":"samaria","hebName":"שומרון"},
    {"id":"binyamin","hebName":"בנימין"},
    {"id":"yehuda","hebName":"יהודה"},
    {"id":"etzion","hebName":"עציון"},
    {"id":"bedouin-society","hebName":"החברה הבדואית"},
  ];
  public subjects=[
    {"id":"subject-1","hebName":"נושא-1"},
    {"id":"subject-2","hebName":"נושא-2"},
    {"id":"subject-3","hebName":"נושא-3"},
  ];
  
  constructor(private router: Router, private route:ActivatedRoute, private authGuardService: AuthGuardService) { }


  onSelect(center){
    if(center.id == "gaza-envelope" || center.id == "west-bank"){
      this.router.navigate(['/location',center.id]);
    }
    else{
      this.router.navigate(['/center-by-location',center.id]);
    }
  }
  onSelectSubject(subject){
    this.router.navigate(['/public-info',subject.id]);

  }
  public get_loggedIn(){
    return this.authGuardService.isLoggedIn;
  }
  public get_logMessage(){
    return this.logMessage;
  }
  public check_code(value){
    if(value == this.code)
    {
      this.authGuardService.isLoggedIn=true;
      this.logMessage="התנתק";
      //allow routing from folders to authrized zone
      //check that user cant use router to get to authorized zone without password 
    }
    else
    {
      alert("הסיסמא שגויה :(");
    }
  }
  public logout()
  {
    this.authGuardService.isLoggedIn=false;
    this.logMessage="התחבר";
    //if user is in autherised zone  -> go to home_page
  }
  public check_loggedIn()
  {
    if(this.authGuardService.isLoggedIn)
      this.router.navigate(['/authorized-zone'])
  }

}
