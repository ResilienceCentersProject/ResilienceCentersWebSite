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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './guard/auth.guard';
/*-----FIREBASE------*/

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilesComponent,
    FoldersComponent,
    LocationComponent,
    SlideshowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,

    /*-----FIREBASE------*/
    AngularFireModule.initializeApp(environment.firebaseConfig),//note: enviroment.firebase_object_name
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    /*-----FIREBASE------*/

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
