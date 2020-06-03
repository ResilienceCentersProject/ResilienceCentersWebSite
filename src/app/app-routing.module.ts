import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PublicInfoComponent } from './public-info/public-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CenterInfoComponent } from './center-info/center-info.component';
import { AuthorizedZoneComponent } from './authorized-zone/authorized-zone.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';




/*-----FIREBASE-AUTH------*/
import { AuthGuard } from "./guard/auth.guard";
//import { FoldersComponent } from './folders/folders.component';
//import { FilesComponent } from './files/files.component';
/*-----FIREBASE-AUTH------*/


const routes: Routes = [ 
  {path:'', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'authorized-zone', component: AuthorizedZoneComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'location/:id',component: LocationComponent},
  {path:'center-info/:id',component: CenterInfoComponent},
  {path:'public-info/:id',component: PublicInfoComponent},
  //{path: 'folders/:id', component:FoldersComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'home-page', component: HomePageComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ContactUsComponent,
                                   HomePageComponent,
                                   PublicInfoComponent,
                                   PageNotFoundComponent,
                                   LocationComponent,
                                   CenterInfoComponent,
                                   AuthorizedZoneComponent,
                                   LoginComponent
                                   //FoldersComponent
                                 ]
