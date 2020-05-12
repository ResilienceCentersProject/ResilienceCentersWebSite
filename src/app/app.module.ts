import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CenterInfoComponent } from './center-info/center-info.component';
import { FilesComponent } from './files/files.component';
import { FoldersComponent } from './folders/folders.component';
import { CenterByLocationComponent } from './center-by-location/center-by-location.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   
    FilesComponent,
    FoldersComponent,
    CenterByLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
