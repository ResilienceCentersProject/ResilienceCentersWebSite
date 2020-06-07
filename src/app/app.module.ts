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

import { Ng2SearchPipeModule } from 'ng2-search-filter';//For the search in Auth zone

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilesComponent,
    FoldersComponent,
    LocationComponent,
    SlideshowComponent,
    LoginComponent,
    AuthorizedZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,

   /*-----FIREBASE------*/
   AngularFireModule.initializeApp(environment.firebaseConfig),//note: enviroment.firebase_object_name
   AngularFireAuthModule,
   AngularFireDatabaseModule, // for database
   /*-----FIREBASE------*/
   Ng2SearchPipeModule //For the search in Auth zone
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
