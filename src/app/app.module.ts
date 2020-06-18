import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './auth/files/files.component';
import { FoldersComponent } from './auth/folders/folders.component';
import { LocationComponent } from './location/location.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './auth/login/login.component';
import { AuthorizedZoneComponent } from './auth/authorized-zone/authorized-zone.component';


/*-----FIREBASE------*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AuthService } from "./auth/services/auth.service";
/*-----FIREBASE------*/

/*-----STORAGE-REALTIME-DATABSE-----*/
import { AngularFireDatabaseModule } from '@angular/fire/database';
/*-----STORAGE-REALTIME-DATABSE-----*/

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShomronComponent } from './center-info/shomron/shomron.component';
import { AshkelonComponent } from './center-info/ashkelon/ashkelon.component';
import { FromTheNewsComponent } from './public-info/from-the-news/from-the-news.component';
import { AshkelonBeachComponent } from './center-info/ashkelon-beach/ashkelon-beach.component';
import { BenjaminComponent } from './center-info/benjamin/benjamin.component';
import { BedouinSocietyComponent } from './center-info/bedouin-society/bedouin-society.component';
import { EshkolComponent } from './center-info/eshkol/eshkol.component';
import { EtzionComponent } from './center-info/etzion/etzion.component';
import { JudeaComponent } from './center-info/judea/judea.component';
import { NegevFieldsComponent } from './center-info/negev-fields/negev-fields.component';
import { SderotComponent } from './center-info/sderot/sderot.component';
import { ShaarHanegevComponent } from './center-info/shaar-hanegev/shaar-hanegev.component';
import { InEmergencyComponent } from './public-info/in-emergency/in-emergency.component';
import { InfoForEducationSystemsComponent } from './public-info/info-for-education-systems/info-for-education-systems.component';
import { InfoForParentsInEmergenciesComponent } from './public-info/info-for-parents-in-emergencies/info-for-parents-in-emergencies.component';
import { InRoutineComponent } from './public-info/in-routine/in-routine.component';
import { VolunteersComponent } from './public-info/volunteers/volunteers.component';//For the search in Auth zone

//for cool slide-show;)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilesComponent,
    FoldersComponent,
    LocationComponent,
    SlideshowComponent,
    LoginComponent,
    AuthorizedZoneComponent,
    ShomronComponent,
    AshkelonComponent,
    FromTheNewsComponent,
    AshkelonBeachComponent,
    BenjaminComponent,
    BedouinSocietyComponent,
    EshkolComponent,
    EtzionComponent,
    JudeaComponent,
    NegevFieldsComponent,
    SderotComponent,
    ShaarHanegevComponent,
    InEmergencyComponent,
    InfoForEducationSystemsComponent,
    InfoForParentsInEmergenciesComponent,
    InRoutineComponent,
    VolunteersComponent,
    //NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    //for cool slide-show;)
    NgbModule,
    //NgbdCarouselBasic,

   /*-----FIREBASE------*/
   AngularFireModule.initializeApp(environment.firebaseConfig),//note: enviroment.firebase_object_name
   AngularFireAuthModule,
   AngularFireDatabaseModule, // for database
   /*-----FIREBASE------*/
   Ng2SearchPipeModule //For the search in Auth zone
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
              //,NgbdCarouselBasic],
 // exports: [NgbdCarouselBasic]

})
export class AppModule { }
export class NgbdCarouselBasicModule {}
