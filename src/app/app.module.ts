import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FoldersComponent } from './folders/folders.component';
import { LocationComponent } from './location/location.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './login/login.component';

/*-----FIREBASE------*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AuthService } from "./services/auth.service";
/*-----FIREBASE------*/

/*-----STORAGE-REALTIME-DATABSE-----*/
import { AngularFireDatabaseModule } from '@angular/fire/database';
/*-----STORAGE-REALTIME-DATABSE-----*/

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilesComponent,
    FoldersComponent,
    LocationComponent,
    SlideshowComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,

    /*-----FIREBASE------*/
    AngularFireModule.initializeApp(environment.firebaseConfig),//note: enviroment.firebase_object_name
    AngularFireAuthModule,
    AngularFireDatabaseModule, // for database
    /*-----FIREBASE------*/

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
